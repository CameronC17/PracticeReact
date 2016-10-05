var Tweet = require('./tweet.jsx');

var TweetList = React.createClass({
  render: function() {
    var list = this.props.tweets.map(function(tweet, i) {
      return (
        <Tweet key={i} message={tweet.message} author={tweet.author} image={tweet.image} />
      )
    })

    //console.log(list);


    return (
      <div className="tweets">
        {list}
      </div>
    )
  }
})

module.exports = TweetList;
