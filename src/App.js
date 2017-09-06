import React, { Component } from 'react';
import logo from './logo.png';
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
  }

  sendButton = (message) => {
    this.setState({currentmessage: $('.txt').val()});
    $('.txt').val('');
    var bounce = _.debounce(() => {
      this.sendMessages();
    }, 250)
    bounce();
    this.getMessages();
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
          
          <h2>Welcome to ChatterCube</h2><img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="container">
        <span className="message-list"> <PostList messages={this.state.messages} /> </span>
        <span><CreatePost sendButton={this.sendButton} /></span>
        </div>
      </div>
    );
  }
}

export default App;
