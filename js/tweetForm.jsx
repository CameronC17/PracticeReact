var TweetForm = React.createClass({

  getInitialState : function() {
    return {
      textcount: 140
    }
  },

  handleChange: function() {
      //console.log(document.getElementById('tweet_text').value.length);
      var remaining = 140 - document.getElementById('tweet_text').value.length;
      this.setState({
        textcount : remaining
      });
  },

  render: function() {
    return (
      <div className="new_tweet">
        <input type="text" id="tweet_text" onChange={this.handleChange} />
        <input type="button" value="Tweet" />
        <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
