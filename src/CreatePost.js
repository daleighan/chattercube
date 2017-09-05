import React, { Component } from 'react';


class CreatePost extends Component {

	render() {
		return (
			<div><textarea className="txt">Enter Your Message</textarea><button onClick={() => this.props.sendButton()}>Send</button></div>
		)
	}
}

export default CreatePost;