var Tweet = React.createClass({
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
      </div>
    )
  }
});

module.exports = Tweet;
