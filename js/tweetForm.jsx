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
        <form>
          <input type="text" id="tweet_text" onChange={this.handleChange} />
          <button type="submit">Tweet</button>
        </form>
        <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
