import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="hameed"
        message="Hi how are you🔥🔥"
        timestamp="30 minutes ago"
        profilePic="https://pbs.twimg.com/media/DNAJVIZX0AA4_iz.jpg"
      />
      <Chat
        name="masthan"
        message="Hi how are you🔥🔥"
        timestamp="30 minutes ago"
        profilePic="https://pbs.twimg.com/media/DmgXiMEXgAEbJC8.jpg"
      />
      <Chat
        name="hameed"
        message="Hi how are you🔥🔥"
        timestamp="30 minutes ago"
        profilePic="https://pbs.twimg.com/media/DNAJVIZX0AA4_iz.jpg"
      />
      <Chat
        name="masthan"
        message="Hi how are you🔥🔥"
        timestamp="30 minutes ago"
        profilePic="https://pbs.twimg.com/media/DmgXiMEXgAEbJC8.jpg"
      />
    </div>
  );
}

export default Chats;
