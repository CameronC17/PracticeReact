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
    image: "http://www.bgsmath.cat/wp-content/uploads/2015/07/1438038061_female1.png"
  },
  {
    message: "React is rubbish!",
    author: "@cameron",
    image: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
  }
];


var users = [
  {
    id: 0,
    user: "@cameron",
    image: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
    count: 1
  },
  {
    id: 1,
    user: "@matt",
    image: "http://www.focusonline.nl/files/img/avatar-4.png",
    count: 1
  },
  {
    id: 2,
    user: "@laura",
    image: "http://www.bgsmath.cat/wp-content/uploads/2015/07/1438038061_female1.png",
    count: 1
  }
];


var TweetFeed = React.createClass({
  render: function() {
    return (
      <div className="twitter_feed">
        <TweetForm postFunction={this.postTweet} clearFunction={this.clearTweets} userList={users} />
        <TweetCount count={dummyTweets.length} />
        <TweetList tweets={dummyTweets} deleteFunction={this.deleteFunction} />
      </div>
    )
  },

  postTweet: function(tweet, id) {
    dummyTweets.push(tweet);
    users[id].count++;
    this.forceUpdate();
  },

  deleteFunction: function(tweetID, author){
    dummyTweets.splice(tweetID, 1);
    var id = users.findIndex(x => x.user==author);
    users[id].count = users[id].count - 1;
    this.forceUpdate();
  },

  clearTweets: function() {
    dummyTweets = [];
    for (var i = 0; i < users.length; i++) {
      users[i].count = 0;
    }
    this.forceUpdate();
  }


});

module.exports = TweetFeed;
