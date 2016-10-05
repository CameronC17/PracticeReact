/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./js/index.jsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TwitterFeed = __webpack_require__(/*! ./twitterFeed.jsx */ 1);
	
	ReactDOM.render(React.createElement(TwitterFeed, null), document.getElementById('container'));

/***/ },
/* 1 */
/*!****************************!*\
  !*** ./js/twitterFeed.jsx ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var TweetList = __webpack_require__(/*! ./tweetList.jsx */ 2);
	var TweetForm = __webpack_require__(/*! ./tweetForm.jsx */ 4);
	var TweetCount = __webpack_require__(/*! ./tweetCount.jsx */ 5);
	
	var dummyTweets = [{
	  message: "React is not great!",
	  author: "@steveyblam"
	}, {
	  message: "React is ok!",
	  author: "@steveybob"
	}, {
	  message: "React is rubbish!",
	  author: "@spartan"
	}];
	
	var postTweet = function postTweet(tweet) {
	  dummyTweets.push(tweet);
	  console.log(dummyTweets);
	};
	
	var TweetFeed = React.createClass({
	  displayName: 'TweetFeed',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'twitter_feed' },
	      React.createElement(TweetForm, { postFunction: postTweet }),
	      React.createElement(TweetCount, { count: dummyTweets.length }),
	      React.createElement(TweetList, { tweets: dummyTweets })
	    );
	  }
	});
	
	module.exports = TweetFeed;

/***/ },
/* 2 */
/*!**************************!*\
  !*** ./js/tweetList.jsx ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Tweet = __webpack_require__(/*! ./tweet.jsx */ 3);
	
	var TweetList = React.createClass({
	  displayName: "TweetList",
	
	  render: function render() {
	    var list = this.props.tweets.map(function (tweet, i) {
	      return React.createElement(Tweet, { key: i, message: tweet.message, author: tweet.author });
	    });
	
	    //console.log(list);
	
	
	    return React.createElement(
	      "div",
	      { className: "tweets" },
	      list
	    );
	  }
	});
	
	module.exports = TweetList;

/***/ },
/* 3 */
/*!**********************!*\
  !*** ./js/tweet.jsx ***!
  \**********************/
/***/ function(module, exports) {

	"use strict";
	
	var Tweet = React.createClass({
	  displayName: "Tweet",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "tweet" },
	      React.createElement(
	        "div",
	        { className: "message" },
	        this.props.message
	      ),
	      React.createElement(
	        "div",
	        { className: "author" },
	        this.props.author
	      )
	    );
	  }
	});
	
	module.exports = Tweet;

/***/ },
/* 4 */
/*!**************************!*\
  !*** ./js/tweetForm.jsx ***!
  \**************************/
/***/ function(module, exports) {

	"use strict";
	
	var TweetForm = React.createClass({
	  displayName: "TweetForm",
	
	
	  getInitialState: function getInitialState() {
	    return {
	      textcount: 140
	    };
	  },
	
	  handleChange: function handleChange() {
	    //console.log(document.getElementById('tweet_text').value.length);
	    var remaining = 140 - document.getElementById('tweet_text').value.length;
	    this.setState({
	      textcount: remaining
	    });
	  },
	
	  handleClick: function handleClick(create) {
	    create({
	      message: "test",
	      author: "test",
	      image: "http://www.focusonline.nl/files/img/avatar-4.png"
	    });
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "new_tweet" },
	      React.createElement("input", { type: "text", id: "tweet_text", onChange: this.handleChange }),
	      React.createElement("input", { type: "button", value: "Tweet", onClick: console.log("hello") }),
	      React.createElement(
	        "div",
	        { id: "textCount" },
	        this.state.textcount
	      )
	    );
	  }
	});
	
	module.exports = TweetForm;

/***/ },
/* 5 */
/*!***************************!*\
  !*** ./js/tweetCount.jsx ***!
  \***************************/
/***/ function(module, exports) {

	"use strict";
	
	var TweetCount = React.createClass({
	  displayName: "TweetCount",
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "tweetCount" },
	      this.props.count
	    );
	  }
	});
	
	module.exports = TweetCount;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map