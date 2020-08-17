import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "masthan",
      image: "https://pbs.twimg.com/media/DNAJVIZX0AA4_iz.jpg",
      message: "whats up 🔥🔥",
    },
    {
      name: "masthan",
      image: "https://pbs.twimg.com/media/DNAJVIZX0AA4_iz.jpg",
      message: "how it goinnn!!!",
    },
    {
      message: "Hi how are you",
    },
  ]);

  const handleClick = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH MASTHAN ON 17/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div key={message.message} className="chatScreen__message">
            <Avatar
              className="chatScreen__avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div key={message.message} className="chatScreen__message">
            <div className="chatScreen__textUser">{message.message}</div>
          </div>
        )
      )}
      <form className="chatScreen__input">
        <input
          type="text"
          placeholder="Type a message"
          className="chatScreen__inputField"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleClick}
          className="chatScreen__inputButton"
          type="submit"
          disabled={!input}
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
