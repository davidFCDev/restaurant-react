import React from "react";
import '../styles/textBubble.css'

const TextBubbleLeft = ({text}) => {
    return (
        <div className="text-bubble-left">
        <p>{text}</p>
        </div>
    );
};

export default TextBubbleLeft;