import React, {Component}  from 'react';
import Tweet from 'react-tweet';


// const tweetData = {
//     id_str: '1058010455640363009',
//     user: {
//         name: 'R',
//         screen_name: 'rprabha',
//         profile_image_url:
//         'http://pbs.twimg.com/profile_images/1218664259/IMG_2410_normal.JPG',
//     },
//     text:
//    'RT @rasbt: Just learned that there\'s a sklearn_porter package -- a tool to "transpile trained scikit-learn estimators to C, Java, JavaScrip…',
  
//     created_at: 'Thu Nov 01 14:58:44 +0000 2018',
//     favorite_count: 0,
//     retweet_count: 10,
//     entities: {
//         urls: [],
//         user_mentions: [],
//         hashtags: [],
//         symbols: []
//       } 
//   };

class TweetClass extends Component {
    constructor(props){
		super(props);
		this.state = {
			item : props.item
		}
	}
    render(){

        const linkProps = {target: '_blank', rel: 'noreferrer'}
        return (  
            <Tweet data={this.state.item} linkProps={linkProps} />
        )
    }

}



export default TweetClass;


var example_tweet={"created_at":"Thu Nov 01 18:49:32 +0000 2018","id":1058068540803203100,"id_str":"1058068540803203073","text":"RT @IOStoken: #IOST is excited to announce the launch of Everest v1.0!\n\nFeaturing Javascript support, smart contract DNS, Multiversion Conc…","source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","truncated":false,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":1032753470082871300,"id_str":"1032753470082871296","name":"Данил","screen_name":"orfNJldf8JgUIzH","location":"Башкортостан республика, Росси","url":null,"description":"я не п**** но смотрю аниме, не хиккан","translator_type":"none","protected":false,"verified":false,"followers_count":0,"friends_count":5,"listed_count":0,"favourites_count":3,"statuses_count":6,"created_at":"Thu Aug 23 22:16:29 +0000 2018","utc_offset":null,"time_zone":null,"geo_enabled":false,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"F5F8FA","profile_background_image_url":"","profile_background_image_url_https":"","profile_background_tile":false,"profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"profile_image_url":"http://pbs.twimg.com/profile_images/1032756192668540929/1APv_qEB_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/1032756192668540929/1APv_qEB_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/1032753470082871296/1535063241","default_profile":true,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"retweeted_status":{"created_at":"Mon Oct 01 12:00:27 +0000 2018","id":1046731566553198600,"id_str":"1046731566553198592","text":"#IOST is excited to announce the launch of Everest v1.0!\n\nFeaturing Javascript support, smart contract DNS, Multive… https://t.co/vJusi85ISm","display_text_range":[0,140],"source":"<a href=\"https://sproutsocial.com\" rel=\"nofollow\">Sprout Social</a>","truncated":true,"in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"user":{"id":946758251902881800,"id_str":"946758251902881792","name":"IOStoken","screen_name":"IOStoken","location":null,"url":"http://iost.io","description":"A Scalable & Secure\n#Blockchain Platform that will bring blockchain to the masses // Reddit: https://t.co/yVBmRkAo4e // Telegram: https://t.co/9DUC7nYJZ6 #IOST","translator_type":"none","protected":false,"verified":false,"followers_count":210840,"friends_count":35,"listed_count":493,"favourites_count":1183,"statuses_count":881,"created_at":"Fri Dec 29 15:02:11 +0000 2017","utc_offset":null,"time_zone":null,"geo_enabled":true,"lang":"en","contributors_enabled":false,"is_translator":false,"profile_background_color":"000000","profile_background_image_url":"http://abs.twimg.com/images/themes/theme1/bg.png","profile_background_image_url_https":"https://abs.twimg.com/images/themes/theme1/bg.png","profile_background_tile":false,"profile_link_color":"1B95E0","profile_sidebar_border_color":"000000","profile_sidebar_fill_color":"000000","profile_text_color":"000000","profile_use_background_image":false,"profile_image_url":"http://pbs.twimg.com/profile_images/946760995703320576/7S2erRsu_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/946760995703320576/7S2erRsu_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/946758251902881792/1514990566","default_profile":false,"default_profile_image":false,"following":null,"follow_request_sent":null,"notifications":null},"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"extended_tweet":{"full_text":"#IOST is excited to announce the launch of Everest v1.0!\n\nFeaturing Javascript support, smart contract DNS, Multiversion Concurrency Control and new Virtual Machine - Everest is 10x faster than EOS, 200x faster than Ethereum.\n\nRead the release here https://t.co/12ePvKLgDE\n#crypto https://t.co/wDCf1K9j0q","display_text_range":[0,280],"entities":{"hashtags":[{"text":"IOST","indices":[0,5]},{"text":"crypto","indices":[273,280]}],"urls":[{"url":"https://t.co/12ePvKLgDE","expanded_url":"http://bit.ly/Everest_v1","display_url":"bit.ly/Everest_v1","indices":[249,272]}],"user_mentions":[],"symbols":[],"media":[{"id":1046731563176742900,"id_str":"1046731563176742912","indices":[281,304],"media_url":"http://pbs.twimg.com/media/Doa8z5ZW0AA5XfT.jpg","media_url_https":"https://pbs.twimg.com/media/Doa8z5ZW0AA5XfT.jpg","url":"https://t.co/wDCf1K9j0q","display_url":"pic.twitter.com/wDCf1K9j0q","expanded_url":"https://twitter.com/IOStoken/status/1046731566553198592/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":1959,"h":834,"resize":"fit"},"medium":{"w":1200,"h":511,"resize":"fit"},"small":{"w":680,"h":289,"resize":"fit"}}}]},"extended_entities":{"media":[{"id":1046731563176742900,"id_str":"1046731563176742912","indices":[281,304],"media_url":"http://pbs.twimg.com/media/Doa8z5ZW0AA5XfT.jpg","media_url_https":"https://pbs.twimg.com/media/Doa8z5ZW0AA5XfT.jpg","url":"https://t.co/wDCf1K9j0q","display_url":"pic.twitter.com/wDCf1K9j0q","expanded_url":"https://twitter.com/IOStoken/status/1046731566553198592/photo/1","type":"photo","sizes":{"thumb":{"w":150,"h":150,"resize":"crop"},"large":{"w":1959,"h":834,"resize":"fit"},"medium":{"w":1200,"h":511,"resize":"fit"},"small":{"w":680,"h":289,"resize":"fit"}}}]}},"quote_count":796,"reply_count":480,"retweet_count":4514,"favorite_count":5364,"entities":{"hashtags":[{"text":"IOST","indices":[0,5]}],"urls":[{"url":"https://t.co/vJusi85ISm","expanded_url":"https://twitter.com/i/web/status/1046731566553198592","display_url":"twitter.com/i/web/status/1…","indices":[117,140]}],"user_mentions":[],"symbols":[]},"favorited":false,"retweeted":false,"possibly_sensitive":false,"filter_level":"low","lang":"en"},"is_quote_status":false,"quote_count":0,"reply_count":0,"retweet_count":0,"favorite_count":0,"entities":{"hashtags":[{"text":"IOST","indices":[14,19]}],"urls":[],"user_mentions":[{"screen_name":"IOStoken","name":"IOStoken","id":946758251902881800,"id_str":"946758251902881792","indices":[3,12]}],"symbols":[]},"favorited":false,"retweeted":false,"filter_level":"low","lang":"en","timestamp_ms":"1541098172747"}