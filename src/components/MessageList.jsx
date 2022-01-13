import React from "react";
import MessageItem from "./MessageItem";
// import PropTypes from 'prop-types';

export default class MessageList extends React.Component {
    render() {
        const { messages, currentMember, initialMemberId } = this.props;

        return (
            <div>
                {messages.map(m => <MessageItem key={initialMemberId.id} messages={m} currentMember={currentMember} />)}
            </div>
        )
    }
}

// MessageList.propTypes = {
//     messages: PropTypes.array.isRequired,
//     currentMember: PropTypes.object.isRequired,
// };