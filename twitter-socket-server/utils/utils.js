
const dateFormatterUtil = (inputDate) => {
    let date = new Date(inputDate);
    return date = date.toDateString()+" "+date.toTimeString().split(" GMT")[0];
}

const getCustomizedTweet = (tweet) => {
    let customizedTweet = {
        'tweetText': tweet.text,
        'userScreenName': "@" + tweet.user.screen_name,
        'name': tweet.user.name, 
        'userImage': tweet.user.profile_image_url_https,
        'tweetURL': `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id}`,
        'createdAt': dateFormatterUtil(tweet.created_at)
      }
      return customizedTweet;
}

module.exports = { dateFormatterUtil , getCustomizedTweet };