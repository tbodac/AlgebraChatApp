import React, { useState, useEffect } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import InputField from "./components/InputField";
import { randomName, randomColor } from "./components/UserIdentity";

//Scaledrone Channel and Room information
const serverId = "bqeA6KBIWxX3kOXQ";
const roomId = "observable-algebraZavršniRadChatApp";

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

  // TODO pročitaj i prokuži ovo: https://reactjs.org/docs/hooks-reference.html#functional-updates
  // Moguće da se može ovdje primjeniti

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

    //TODO Šalješ cijeli chat array, bilo bi bolje da šalješ samo posljednji

    //Recieving messages from the server
    room.on("message", (message) => {
      const { data, id, member, timestamp } = message;
      let copyChat = chat;
      copyChat.push({ member: member, text: data, id: id, time: timestamp });
      let newMessages = [...copyChat];
      setChat(newMessages);
      console.log(chat);
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
    <div className="App">
      <div className="App-header">
        <h1>Hello Algebra chat</h1>
      </div>>

      <MessageList
        chat={chat}
        myId={memberId}
      />
      <InputField submitMessage={sendMessage} />
    </div>
  );
};