import React, { useState } from "react";

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
        }
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit}>
                <input className="input-text" type="text" placeholder="Say something..." value={message} onChange={handleChange} autoFocus={true} />
                <input className="input-submit" type="submit" value="Send" />
            </form>
        </div>
    );
}

//TODO proptypes