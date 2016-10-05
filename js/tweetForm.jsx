var TweetForm = React.createClass({

  handleChange: function() {
      //console.log(document.getElementById('tweet_text').value.length);
      var remaining = 140 - document.getElementById('tweet_text').value.length;
      this.render(remaining);
  },

  render: function(remaining) {
    console.log(remaining);
    return (
      <div className="new_tweet">
        <input type="text" id="tweet_text" onChange={this.handleChange} />
        <input type="button" value="Tweet" />
        <div id="textCount">Hello {remaining}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
