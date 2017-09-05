import React, { Component } from 'react';
import Post from './Post.js';


class PostList extends Component {

	render(props) {
		return (
		<div>
			{this.props.messages.map((message) =>
				<Post key={message.messageId} message={message} />
			)}
		</div>
		)
	}
}

export default PostList;