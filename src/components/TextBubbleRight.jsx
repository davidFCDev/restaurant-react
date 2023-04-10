import React from "react";
import '../styles/textBubble.css'

const TextBubbleRight = ({text}) => {
    return (
        <div className="text-bubble-right">
            <p>{text}</p>
        </div>
    );
};

export default TextBubbleRight;