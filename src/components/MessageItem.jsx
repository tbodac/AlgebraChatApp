import React from "react";

export default function MessageItem({ chatId, chatText, currentMember, time, myId }) {

    const myMessage = myId.id === currentMember.id;
    const identifyMember = myMessage ? "Messages-message currentMember" : "Messages-message";

    return (
        <li key={chatId} className={identifyMember}>
            <span className="avatar" style={{ backgroundColor: currentMember.clientData.color }} />
            <div className="Message-content">
                <div className="username">{currentMember.clientData.username}</div>
                <div className="text">{chatText}</div>
            </div>
            {/* TODO sad pokazuje datum, sredi da pokazuje i hh:mm
            <div className="user-time">{new Date(time * 1000).toLocaleDateString()}</div> */}
        </li >
    )
}

//TODO proptypes