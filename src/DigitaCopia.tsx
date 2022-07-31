import {useState} from "react";

export default function DigitaCopia() {

    const [text, setText] = useState('');

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }

    return (
        <div>
            <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
            <div>{text}</div>
        </div>
    )
}