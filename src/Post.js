import React, { Component } from 'react';

class Post extends Component {

	render() {
		return (
			<div className="post">
			  <div className="user">{this.props.message.username}: </div><span className="message"> {this.props.message.message} </span>
			</div>
		);
	}
}

export default Post;