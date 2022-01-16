import React, { useState, useEffect } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import InputField from "./components/InputField";
import { randomName, randomColor } from "./components/UserIdentity";

//Scaledrone Channel and Room information
const serverId = "nc0YuVnt1cLgFGgo";
const roomId = "observable-zavrsniRadAlgebraChatApp";

//member setup
const member = {
  username: randomName(),
  color: randomColor(),
}

//Connecting to the server & chat room
const drone = new window.Scaledrone(serverId, { data: member });
const room = drone.subscribe(roomId);


export default function App() {

  const [memberId, setMemberId] = useState([]);
  const [chat, setChat] = useState([]);


  useEffect(() => {

    //Assigning an unique id to a chat member upon opening the app
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      let newMember = memberId;
      newMember.id = drone.clientId;
      setMemberId(newMember);
    });

    //Recieving messages from the server
    room.on("message", (message) => {
      const { data, id, member, timestamp } = message;
      let copyChat = chat;
      copyChat.push({ member: member, text: data, id: id, time: timestamp });
      let newMessages = [...copyChat];
      setChat(newMessages);
    });

  }, []);


  //Sending messages to Scaledrone server
  const sendMessage = (message) => {
    drone.publish({
      room: roomId,
      message
    });
  };

  return (
    <div className="app">
      <div className="app-header">
        <h1>Algebra chat</h1>
      </div>

      <MessageList
        chat={chat}
        myId={memberId}
      />
      <InputField submitMessage={sendMessage} />
    </div>
  );
};