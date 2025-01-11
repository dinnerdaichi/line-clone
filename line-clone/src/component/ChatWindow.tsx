import React from "react";
import { useState } from "react";
import ChatBubble from "./ChatBubble";

const ChatWindow: React.FC = () => {

  const [messages, setMessages] = useState<{text:string,isOwn:boolean}[]>([]);
  const [input, setInput] = useState("");
  const [isOwnMmessageText, setIsOwnMessageText] = useState(true);


  const sendMessage = () => {
    console.log('sendMessage called!');
    if (input.trim() === "") { return };
    setMessages([...messages, { text: input, isOwn: isOwnMmessageText }]);
    setInput("");

  }

  const toggelSender = () => {
    setIsOwnMessageText(!isOwnMmessageText);
  }

  const messageReset = () => {
    setMessages([]);
  }


  return (

    <div className="chat-window">
      <div className="chat-message">
        {messages.map((message, index) => (
          <ChatBubble
            key={index}
            message={message.text}
            isOwnMessage={message.isOwn} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={toggelSender}>
          {isOwnMmessageText ? "you" : "other"}
        </button>
        <button onClick={sendMessage}>Send</button>
        <button onClick={messageReset}>reset</button>
      </div>
    </div>

  );
};

export default ChatWindow;