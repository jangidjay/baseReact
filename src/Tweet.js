import React from "react";
import "./App.css";

function Tweet({name, message}) {
    return (
        <div className="tweet">
            <h3 className="name">{name}</h3>
            <p className="message">{message}</p>
        </div>
    );
}

export default Tweet;