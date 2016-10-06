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
      //console.log(document.getElementById('tweet_text').value.length);
      var remaining = 140 - document.getElementById('tweet_text').value.length;
      this.setState({
        inputValue: document.getElementById('tweet_text').value,
        textcount : remaining
      });
  },

  handleClick: function() {
    console.log(this.state.inputValue);

    var newMessage = {
      message: "test",
      author: "test",
      image: "http://www.focusonline.nl/files/img/avatar-4.png"
    };

    this.props.postFunction(newMessage);

  },

  render: function() {
    return (
      <div className="new_tweet">
        <input type="text" id="tweet_text" onChange={this.handleChange} placeholder="Enter Tweet..."/>
        <input type="button" value="Tweet" onClick={this.handleClick} />
        <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
