var TweetForm = React.createClass({

  getInitialState : function() {

    return {
      textcount: 140,
      submitter: this.props.userList[0].user,
      image: this.props.userList[0].image,
      tweetCount: this.props.userList[0].count,
      id: 0
    }
  },

  handleChange: function() {
      var remaining = 140 - document.getElementById('tweet_text').value.length;
      this.state.textcount = remaining;
      this.forceUpdate();
  },

  handleClick: function() {
    if (this.state.tweetCount<2) {
      var newMessage = {
        message: document.getElementById('tweet_text').value,
        author: this.state.submitter,
        image: this.state.image
      };
      this.state.tweetCount++;
      this.props.postFunction(newMessage, this.state.id);
    };
  },
  
  handleSelect: function(event) {
    var optionValue = event.target.selectedIndex;
    this.state.submitter = this.props.userList[optionValue].user;
    this.state.image = this.props.userList[optionValue].image;
    this.state.tweetCount = this.props.userList[optionValue].count;
    this.state.id = optionValue;
  },

  handleClear: function() {
    this.state.tweetCount=0;
    this.props.clearFunction();
  },

  render: function() {
    return (
      <div className="new_tweet">
        <select className="userPicker" onChange={this.handleSelect}>
          {this.props.userList.map(function(user) {
            return <option key={user.id}>{user.user}</option>
          })};
        </select>
        <input type="text" id="tweet_text" onChange={this.handleChange} placeholder="Enter Tweet..."/>
        <input type="button" value="Tweet" onClick={this.handleClick} />
        <input type="button" value="Clear Tweets" onClick={this.handleClear} />
        <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
