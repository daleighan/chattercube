import React, { Component } from 'react';


class Post extends Component {

	render() {
		return (
			<div className="post">
			  <span>{this.props.message.username}: </span> <span> {this.props.message.message} </span>
			</div>
		);
	}
}

export default Post;