import React, { Component } from 'react';


class Post extends Component {

	render() {
		return (
			<div className="post">
			  <div>{this.props.message.username}: </div><span> {this.props.message.message} </span>
			</div>
		);
	}
}

export default Post;