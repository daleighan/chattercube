import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList.js';
import CreatePost from './CreatePost.js';
import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      username: '',
      currentmessage: ''
    };
  }

  getMessages = () => {
    axios.get('http://chattercube.thirdtape.com/messages', {
      part: 'responseJSON',
    })
    .then(data => {
      this.setState({messages: data.data.messages});  
    })
  }

  sendMessages = () => {
    axios.post('http://chattercube.thirdtape.com/messages', {
        message: this.state.currentmessage,
        username: this.state.username
      }
    )
    .then(response =>
      console.log(response)
    )
  }

  sendButton = (message) => {
    this.setState({currentmessage: $('.txt').val()});
    $('.txt').val('');
    var bounce = _.debounce(() => {
      this.sendMessages();
    }, 500)
    bounce();
  }

  componentDidMount = () => {
    this.setState({username : prompt('Please enter a username')});
    this.getMessages();
  }

  render = () => {
    this.getMessages();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to ChatterCube</h2>
        </div>
        <div>
          To get started, edit <code>src/App.js</code> and save to reload.
        <PostList messages={this.state.messages} />
        <CreatePost sendButton={this.sendButton} />
        </div>
      </div>
    );
  }
}

export default App;
