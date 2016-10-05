var TweetList = require('./tweetList.jsx');
var TweetForm = require('./tweetForm.jsx');
var TweetCount = require('./tweetCount.jsx');

var dummyTweets = [
  {
    message: "React is not great!",
    author: "@steveyblam"
  },
  {
    message: "React is ok!",
    author: "@steveybob"
  },
  {
    message: "React is rubbish!",
    author: "@spartan"
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
