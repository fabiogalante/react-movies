import {useState} from "react";

export default function DigitaCopia() {

    const [text, setText] = useState('');
    const [canSee, setCanSee] = useState(false);

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }

    function handleCheckboxChanged() {
        setCanSee(!canSee)
    }

    return (
        <>
            <h1>Events Example</h1>
            <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
            <div>{text}</div>
            <hr/>
            <hr/>
            <div>
                <input type="checkbox" onChange={handleCheckboxChanged} />
            </div>
            {canSee ? <div>You are seeing the secret</div> :
                <div>You are not allowed to see</div>}
        </>
    )
}