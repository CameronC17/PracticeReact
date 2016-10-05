var TweetList = require('./tweetList.jsx');
var TweetForm = require('./tweetForm.jsx');
var TweetCount = require('./tweetCount.jsx');

var dummyTweets = [
  {
    message: "React is not great!",
    author: "@steveyblam",
    image: "http://i.imgur.com/L2VbuPE.gif"
  },
  {
    message: "React is ok!",
    author: "@steveybob",
    image: "http://i.imgur.com/L2VbuPE.gif"
  },
  {
    message: "React is rubbish!",
    author: "@spartan",
    image: "http://i.imgur.com/L2VbuPE.gif"
  }
];

var TweetFeed = React.createClass({
  render: function() {
    return (
      <div className="twitter_feed">
        <TweetForm />
        <TweetCount count={dummyTweets.length} />
        <TweetList tweets={dummyTweets} />
      </div>
    )
  }
});

module.exports = TweetFeed;
