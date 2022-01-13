import React from "react";

export default function MessageItem({ messages, currentMember, initialMemberId }) {

    const myMessage = currentMember.id === initialMemberId.id;
    const identifyMember = myMessage ? "messages currentMember" : "messages otherMember";

    return (
        <div key={currentMember.id} className={identifyMember}>
            <div className="user-name">{currentMember.username}</div>
            <div className="user-content">{messages}</div>
            <div className="user-color">{currentMember.color}</div>
            <div className="user-time">{new Date(messages.time * 1000).toLocaleDateString()}</div>
        </div >
    )
}