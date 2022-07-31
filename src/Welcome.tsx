import {useState} from "react";

interface welcomeProps {
    name: string;
}

function Welcome(props: welcomeProps) {

    const [text, setText] = useState('');

    function HandleClick() {
        setText('You clicked me');
    }

    return (
        <div>
            <button onClick={HandleClick}>
                Click me
            </button>
            <h3>Hello, {props.name}</h3>
            <h4>Text value: {text}</h4>
        </div>
    )
}

export default Welcome;