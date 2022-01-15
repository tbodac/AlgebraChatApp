import React from "react";

export default function MessageItem({ chatId, chatData, currentMember, time, myId }) {

    const myMessage = myId.id === currentMember.id;
    const identifyMember = myMessage ? "messages currentMember" : "messages otherMember";

    return (
        <div key={chatId} className={identifyMember}>
            <div className="user-name">{currentMember.clientData.username}</div>
            <div className="user-content">{chatData}</div>
            <div className="user-color" style={{ backgroundColor: currentMember.clientData.color }}></div>
            <div className="user-time">{new Date(time * 1000).toLocaleDateString()}</div>
        </div >
    )
}