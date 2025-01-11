import React from "react";

interface ChatBubbleProps {
  message: string;
  isOwnMessage: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isOwnMessage }) => {


  return (

    <div className={`chat-bubble $is{isOwnMessage ? "own" : "other"}`}
      style={{
        display: "flex",
        justifyContent: isOwnMessage ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}>
      <div
        style={{
          padding: "10px",
          backgroundColor: isOwnMessage ? "#0084ff" : "#f0f0f0",
          color: isOwnMessage ? "#fff" :"#000",
          borderRadius: "10px",
          maxWidth: "70%",
          wordWrap: "break-word",
          display: "flex",
        }}>
        <img src="" alt="" />
        <p>{message}</p>
      </div>

    </div>

  )

}


export default ChatBubble;