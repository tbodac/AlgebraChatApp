import React from "react";

export default function MessageItem({ chatId, chatText, currentMember, time, myId }) {

    const myMessage = myId.id === currentMember.id;
    const identifyMember = myMessage ? "messages-message currentMember" : "messages-message";

    // function timeConverter(time) {
    //     let a = new Date(time * 1000);
    //     var date = a.getDate();
    //     var hour = a.getHours();
    //     var min = a.getMinutes();
    //     var currentTime = date + "/" + hour + ':' + min;
    //     return time;


    const unixTime = time
    const milliseconds = unixTime * 1000
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15


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

//TODO proptypes