import React, { Component } from 'react';


class Post extends Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<div>
			  <span>{this.props.message.username}: </span> <span> {this.props.message.message} </span>
			</div>
		);
	}
}

export default Post;