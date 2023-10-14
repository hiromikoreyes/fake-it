import React, { Component } from 'react';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      newMessage: '',
    };
  }

  handleNewMessageChange = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSendMessage = () => {
    const { messages, newMessage } = this.state;
    if (newMessage.trim() !== '') {
      this.setState({
        messages: [...messages, { text: newMessage, user: 'You' }],
        newMessage: '',
      });
    }
  };

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div className="chat-box">
        <div className="chat-board">
          <div className="message-box">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <span>{message.user}:</span> {message.text}
              </div>
            ))}
          </div>
          <div className="input-box">
            <input
              type="text"
              value={newMessage}
              onChange={this.handleNewMessageChange}
              placeholder="Type your message..."
            />
            <button onClick={this.handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    );
  }
}


export default ChatBox;
