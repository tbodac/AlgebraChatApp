import React from "react";

export default function MessageItem({ chatId, chatText, currentMember, time, myId }) {

    const myMessage = myId.id === currentMember.id;
    const identifyMember = myMessage ? "messages-message currentMember" : "messages-message";

    return (
        <ul className="messages-list">
            <li key={chatId} className={identifyMember}>

                <span className="avatar" style={{ backgroundColor: currentMember.clientData.color }} />
                <div className="message-content">
                    <div className="username">
                        {currentMember.clientData.username}
                        {"  /  "}
                        {new Date(time * 1000).toLocaleTimeString({ timeZoneName: "short" })}
                    </div>
                    <div className="text">{chatText}</div>
                </div>
            </li >
        </ul >
    )
}

//TODO dodaj proptypes