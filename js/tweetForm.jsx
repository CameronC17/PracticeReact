var TweetForm = React.createClass({

  getInitialState : function() {
      this.state = {
      inputValue: '',
      textcount: 140
    }
    return {

    }
  },

  handleChange: function() {
      var remaining = 140 - document.getElementById('tweet_text').value.length;
      this.setState({
        textcount : remaining
      });
  },

  handleClick: function() {

    var newMessage = {
      message: document.getElementById('tweet_text').value,
      author: "test",
      image: "http://www.focusonline.nl/files/img/avatar-4.png"
    };

    this.props.postFunction(newMessage);
  },

  clearTweets: function() {
    this.props.clearFunction();
  },

handleDelete: function(){
  

},

  render: function() {
    return (
      <div className="new_tweet">
        <input type="text" id="tweet_text" onChange={this.handleChange} placeholder="Enter Tweet..."/>
          <input type="button" value="Tweet" onClick={this.handleClick} />
          <input type="button" value="Clear Tweets" onClick={this.clearTweets} />
          <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
