var TweetList = require('./tweetList.jsx');
var TweetForm = require('./tweetForm.jsx');
var TweetCount = require('./tweetCount.jsx');

var dummyTweets = [
  {
    message: "React is not great!",
    author: "@matt",
    image: "http://www.focusonline.nl/files/img/avatar-4.png"
  },
  {
    message: "React is ok!",
    author: "@laura",
    image: "http://www.bgsmath.cat/wp-content/uploads/2015/07/1438038061_female1.png  "
  },
  {
    message: "React is rubbish!",
    author: "@cameron",
    image: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
  }
];

var postTweet = function(tweet) {
  dummyTweets.push(tweet);
  console.log(dummyTweets);
}

var TweetFeed = React.createClass({
  render: function() {
    return (
      <div className="twitter_feed">
        <TweetForm postFunction={postTweet}/>
        <TweetCount count={dummyTweets.length} />
        <TweetList tweets={dummyTweets} />
      </div>
    )
  }
});

module.exports = TweetFeed;
