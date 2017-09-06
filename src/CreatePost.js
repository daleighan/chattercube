import React, { Component } from 'react';


class CreatePost extends Component {

	render() {
		return (
			<div className="create-post"><textarea className="txt" defaultValue="Enter Your Message"></textarea><div className="button" onClick={() => this.props.sendButton()}>Send</div></div>
		)
	}
}

export default CreatePost;