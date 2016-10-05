var TweetCount = React.createClass({
  render: function() {
    return (
      <div className="tweetCount">
        {this.props.count}
      </div>
    )
  }
});

module.exports = TweetCount;