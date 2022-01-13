import React, { useState, useEffect } from "react";
import "./App.css";
import MessageList from "./components/MessageList";
import InputField from "./components/InputField";
import { randomName, randomColor } from "./components/UserIdentity";

//Scaledrone Channel and Room information
const serverId = "dLWDUvT6xoHpgJUm";
const roomId = "Observable-chatapp";

export default function App() {
  const initialState = {
    member: {
      username: randomName(),
      color: randomColor(),
    },
    messages: [],
  };

  const [chat, setChat] = useState(initialState);
  const [drone, setDrone] = useState();
  const [initialMemberId, setInitialMemberId] = useState();

  //Connecting to the server
  useEffect(() => {
    const drone = new window.Scaledrone(serverId, { data: chat.member });
    setDrone(drone);
  }, [chat.member]);


  useEffect(() => {
    //Assigning an unique id to a chat member upon opening the app
    const droneEvents = () => {
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        chat.member.id = drone.clientId;
        if (initialMemberId === null) setInitialMemberId(drone.clientId);
        setChat({ ...chat }, chat.member);
        roomEvents();
      });

      const roomEvents = () => {
        //Connecting to the chat room
        const room = drone.subscribe(roomId);

        //Recieving messages from the server
        room.on("message", (message) => {
          receiveMsg(message);
          const receiveMsg = (message) => {
            chat.messages.push(message);
            setChat({ ...chat }, chat.messages);
          }
        });
      };

      if (drone && !chat.member.id) {
        droneEvents();
      }
    }
  }, [chat, drone, initialMemberId]);

  //sending messages to scaledrone
  const sendMessage = (message) => {
    drone.publish({
      room: roomId,
      message
    });
    console.log("test-primljeno")
  };

  return (
    <div className="App">
      <h1>Hello Algebra chat</h1>
      <MessageList
        messages={chat.messages}
        currentMember={chat.member}
        initialMemberId={initialMemberId}
      />
      <InputField submitMessage={sendMessage} />
    </div>
  );
};