##  De(p)Tweector 

[![Inline docs](http://inch-ci.org/github/phoenixframework/phoenix.svg)](http://inch-ci.org/github/davidawad/deTweector)


This (terribly named) project was an inspired stem of the insightweets project I had built previously, with
one of it's potential applications.

This project looks through tweets for any given query, and looks at the average
**sentiment** of any search result's twitter account over a period of time.

After looking at which we can determine if a particular user happens to be
suffering from depression.

*interesting* right?

Please contribute. I can't actually do node callbacks for my life.


This is sample tweet, it should help as far as understanding the JSON responses from twitter.

```JSON
tweet = {
     created_at: 'Sat Jun 13 04:44:55 +0000 2015',
     id: 609582194881896400,
     id_str: '609582194881896448',
     text: 'Just wanna wake up to a cute message in the morning, that is all',
     source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
     truncated: false,
     in_reply_to_status_id: null,
     in_reply_to_status_id_str: null,
     in_reply_to_user_id: null,
     in_reply_to_user_id_str: null,
     in_reply_to_screen_name: null,
     user:
      { id: 2766659457,
        id_str: '2766659457',
        name: 'diana',
        screen_name: 'dcampbelll_',
        location: 'fly high girls JCL & TEM ❤️',
        url: null,
        description: '@kyleevick is my forever // im cruisin\' w @afansler_123 @urugtina @MoOdY_foLiFe ✊',
        protected: false,
        verified: false,
        followers_count: 705,
        friends_count: 558,
        listed_count: 1,
        favourites_count: 8297,
        statuses_count: 14096,
        created_at: 'Wed Sep 10 21:59:54 +0000 2014',
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        lang: 'en',
        contributors_enabled: false,
        is_translator: false,
        profile_background_color: 'C0DEED',
        profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
        profile_background_tile: false,
        profile_link_color: '0084B4',
        profile_sidebar_border_color: 'C0DEED',
        profile_sidebar_fill_color: 'DDEEF6',
        profile_text_color: '333333',
        profile_use_background_image: true,
        profile_image_url: 'http://pbs.twimg.com/profile_images/608409270640607232/KpIbCCEg_normal.jpg',
        profile_image_url_https: 'https://pbs.twimg.com/profile_images/608409270640607232/KpIbCCEg_normal.jpg',
        profile_banner_url: 'https://pbs.twimg.com/profile_banners/2766659457/1433429178',
        default_profile: true,
        default_profile_image: false,
        following: null,
        follow_request_sent: null,
        notifications: null },
     geo: null,
     coordinates: null,
     place: null,
     contributors: null,
     retweet_count: 2,
     favorite_count: 1,
     entities:
      { hashtags: [],
        trends: [],
        urls: [],
        user_mentions: [],
        symbols: [] },
     favorited: false,
     retweeted: false,
     possibly_sensitive: false,
     filter_level: 'low',
     lang: 'en' },
  retweet_count: 0,
  favorite_count: 0,
  entities:
   { hashtags: [],
     trends: [],
     urls: [],
     user_mentions: [ [Object] ],
     symbols: [] },
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  filter_level: 'low',
  lang: 'en',
  timestamp_ms: '1434171504660' }
}

```

## Resourses

[Twit](https://www.npmjs.com/package/twit) is a fantastic twitter client.
Looking for a simpler way to see mongo data? Check out [mongoui](https://github.com/azat-co/mongoui)

# Special Thanks
[]
[]
