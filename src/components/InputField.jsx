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
        <div className="Input">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Say something" value={message} onChange={handleChange} autoFocus={true} />
                <input type="submit" value="Send" className="button" />
            </form>
        </div>
    );
}

//TODO proptypes