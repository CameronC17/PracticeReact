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

  handleClick: function(create) {
    create({
      message: "test", 
      author: "test", 
      image: "http://www.focusonline.nl/files/img/avatar-4.png"
    });
  },

  render: function() {
    return (
      <div className="new_tweet">
        <input type="text" id="tweet_text" onChange={this.handleChange} />
        <input type="button" value="Tweet" onClick={console.log("hello")} />
        <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
