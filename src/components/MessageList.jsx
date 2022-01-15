import React from "react";
import MessageItem from "./MessageItem";
export default class MessageList extends React.Component {
    render() {
        const { chat, myId } = this.props;

        return (
            <div className={"identifyMember"} >
                {chat.map(chat =>
                    <MessageItem
                        key={chat.id}
                        chatId={chat.id}
                        chatText={chat.text}
                        currentMember={chat.member}
                        time={chat.time}
                        myId={myId}
                    />)}
            </div>
        )
    }
}

//TODO proptypes