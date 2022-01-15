import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function InputField({ submitMessage }) {
    const [message, setMessage] = useState("");
    const [trimMessage, setTrimMessage] = useState("");

    const handleChange = (e) => {
        const message = e.target.value;
        setMessage(message);
        const trimMessage = message.trim();
        setTrimMessage(trimMessage);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (trimMessage) {
            submitMessage(trimMessage);
            setMessage("");
            console.log("test-poslano")
        }
    }

    return (
        // <form onSubmit={(e) => handleSubmit(e)}>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Say something" value={message} onChange={handleChange} autoFocus={true} />
            <input type="submit" value="Send" />
        </form>
    );
}

// InputField.propTypes = {
//     submitMessage: PropTypes.func.isRequired
// }
