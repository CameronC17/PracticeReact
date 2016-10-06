var Tweet = React.createClass({

  handleDelete: function(){
    this.props.delete(this.props.tweetID);

  },

  render: function() {
    return (
      <div className="tweet">
        <div className="message">
          {this.props.message}
        </div>
        <div className="author">
          {this.props.author}
        </div>
        <div className="image">
          <img src={this.props.image} alt="" />
        </div>
        <div className="delete">
        <input type="button" value="Delete" onClick={this.handleDelete} />
        </div>
      </div>
    )
  }
});

module.exports = Tweet;
