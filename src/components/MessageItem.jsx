import React from "react";

export default function MessageItem({ chatId, chatText, currentMember, time, myId }) {

    const myMessage = myId.id === currentMember.id;
    const identifyMember = myMessage ? "messages currentMember" : "messages otherMember";

    return (
        <div key={chatId} className={identifyMember}>
            <div className="user-name">{currentMember.clientData.username}</div>
            <div className="user-content">{chatText}</div>
            <div className="user-color" style={{ backgroundColor: currentMember.clientData.color }}></div>
            {/* TODO sad pokazuje datum, sredi da pokazuje i hh:mm
            <div className="user-time">{new Date(time * 1000).toLocaleDateString()}</div> */}
        </div >
    )
}

//TODO proptypes