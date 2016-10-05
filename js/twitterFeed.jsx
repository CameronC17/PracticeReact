var TweetList = require('./tweetList.jsx');
var TweetForm = require('./tweetForm.jsx');

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


var TweetFeed = React.createClass({
  render: function() {
    return (
      <div className="twitter_feed">
        <TweetForm />
        <TweetList tweets={dummyTweets} />
      </div>
    )
  }
});

module.exports = TweetFeed;
