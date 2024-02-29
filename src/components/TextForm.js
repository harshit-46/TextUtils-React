import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let cap = text.toUpperCase();
        setText(cap);
        props.showAlert("Converted to uppercase!", "success");
    };

    const handleLoClick = () => {
        let cap = text.toLowerCase();
        setText(cap);
        props.showAlert("Converted to lowercase!", "success");
    };

    const handleClearClick = () => {
        let cap = '';
        setText(cap);
        setEmail("Not Present");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const extractEmail = () => {
        let arr = text.split(" ");
        for(let items of arr) {
            let string = items;
            let strLen = string.length;
            if(string.slice(strLen - 4) === ".com") {
                let email = string;
                setEmail(email);
            }
        }
    };

    const [text, setText] = useState('');
    const [email, setEmail] = useState("Not Present");
    return (
        <>
        <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#262323', color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extractEmail}>Extract Email</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
            <h2>Your Text Summary:</h2>
            <p>{text.split(" ").filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Nothing to preview!'}</p>
            <p>Email is: {email}</p>
        </div>
        </>
    )
}