var Twit = require('twit');
var indico = require('indico.io');
var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var T = new Twit({
  consumer_key: '',
  consumer_secret: '',
  access_token : '',
  access_token_secret: ''
});

indico.apiKey = '';

// Connection URL to store tweets in mongo because twitter rate-limiting.
var mongoUrl = 'mongodb://localhost:27017/tweets';

var insertDocuments = function(db, arr, callback) {
  // Get the documents collection
  var collection = db.collection('YOLO');
  // Insert some documents
  collection.insert( arr , function(err, result) {
    //assert.equal(err, null);
    console.log("Inserted tweets into the collection");
    callback(result);
  });
};

function process_user(current_tweet, callback){
  // perform a query on each individual user's timeline.
  T.get('statuses/user_timeline', { user_id: current_tweet.user.id , exclude_replies:true , language: 'en' }, function(err, data, response) {
    if(err){
        console.log('an error happened. dunno why, really. Shame that. Dying.');
        console.log(err);
        // crash and burn
        process.exit(2);
    }
    // iterate through each user's timeline
    var text_posts = [ ];
    for (var i=0; i < data.length; i++){
        // find all text posts that are in english.
        text_posts.push( data[i].text );
    }
    // send entire text timeline for a specific user to be processed
    // isDepressed( text_posts, callback );
    var post_nums = [ ];
    // iterate through array of tweets, pass them all to sentiment
    indico.batchSentiment(text_posts).then(function(res){
      /* res - [ 0.07808824238341827, 0.813400530597089 ]
      text_posts - [ 'RT @dogtextings: http://t.co/X7cF5knuMq', 'RT @MeIissa8234: My new favorite account has to be @BestOfMiIitary']
      */
      buff = 0 ;
      var i = res.length;
      while( i-- ) {
        buff += res[i] ;
      }
      avg = ( buff / res.length );

      // basic algorithm, if average sentiment is < benchmark, consider depressed.
      if (avg < 0.67){
        callback(current_tweet, "DEPRESSED", avg) ;
      }
      else{
        callback(current_tweet, "TOTALLY FINE", avg);
      }
    }).catch(function(err){
      console.log('err: ', err);
      console.warn(err);
    });

  });

}

// start of execution
T.get('search/tweets', { q:'army OR navy OR marines', count: 100, language: 'en' }, function(err, data, response) {
  if(err){
      console.log('an error happened with the twitter query. Dying.');
      console.log(err);
      // crash and burn
      process.exit(2);
  }

  for (var i = 0; i < data.statuses.length; i++){
    current_tweet = data.statuses[i];

    // we get back the depressed boolean here which we can use to make judgements.
    process_user(current_tweet, function(ret_tweet, dep_bool, sentiment){

      // create a db entry for given user
      payload = {
        user : ret_tweet.user.id,
        tweet_id : ret_tweet.id,
        depressed : dep_bool,
        sentiment : sentiment,
      };

      // Use connect method to connect to the Server
      MongoClient.connect(mongoUrl, function(err, db) {
        assert.equal(null, err);

        console.log("Connected correctly to server");
        if(payload.user && payload.tweet_id && payload.depressed && payload.sentiment){
          insertDocuments(db, payload, function(){
            db.close();
          });
        }

      });

      console.log('INSERTING INTO DB {');
      console.log( sentiment );
      console.log( dep_bool );
      console.log( "User Tweet ID: " + ret_tweet.user.id );
      console.log('}');
    });

  }

});
