var TweetForm = React.createClass({

  getInitialState : function() {

    this.state = {
      textcount: 140,
      submitter: this.props.userList[0].user,
      image: this.props.userList[0].image
    }
    return {

    }
  },

  handleChange: function() {
      var remaining = 140 - document.getElementById('tweet_text').value.length;
      this.state.textcount = remaining;
      this.forceUpdate();
  },

  handleClick: function() {
    var newMessage = {
      message: document.getElementById('tweet_text').value,
      author: this.state.submitter,
      image: this.state.image
    };

    this.props.postFunction(newMessage);

  },
  
  handleSelect: function(event) {
    var optionValue = event.target.selectedIndex;
    this.state.submitter = this.props.userList[optionValue].user;
    this.state.image = this.props.userList[optionValue].image;
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
        <input type="button" value="Clear Tweets" onClick={this.props.clearFunction} />
        <div id="textCount" >{this.state.textcount}</div>
      </div>
    )
  }
});

module.exports = TweetForm;
