import React from "react";
import MessageItem from "./MessageItem";
// import PropTypes from 'prop-types';

export default class MessageList extends React.Component {
    render() {
        const { chat, myId } = this.props;

        return (
            <div>
                {chat.map(chat =>
                    <MessageItem
                        key={chat.id}
                        chatId={chat.id}
                        chatData={chat.data}
                        currentMember={chat.member}
                        time={chat.time}
                        myId={myId}
                    />)}
            </div>
        )
    }
}

// MessageList.propTypes = {
//     messages: PropTypes.array.isRequired,
//     currentMember: PropTypes.object.isRequired,
//     myId: PropTypes.object.isRequired
// };