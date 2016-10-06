var Tweet = require('./tweet.jsx');

var TweetList = React.createClass({
  render: function() {
    var deleteF = this.props.deleteFunction;
    var list = this.props.tweets.map(function(tweet, i) {
      return (
        <Tweet key={i} tweetID={i} message={tweet.message} author={tweet.author} image={tweet.image} delete={deleteF}/>
      )
    })

    return (
      <div className="tweets">
        {list}
      </div>
    )
  }
})

module.exports = TweetList;
