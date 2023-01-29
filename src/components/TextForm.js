import React, {useState} from 'react';


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log('uppercase was clcked' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = () =>{
        // console.log('uppercase was clcked' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success")
    }

    const handleClearClick = () =>{
        // console.log('uppercase was clcked' + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text area cleared","success")
    }

    // function to speak
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text converting to speech","success")
    }

    // funcion to count vowels
    const handleVoClick = () =>{
        for(count=0; count<=text.length; count++){
            if(text.charAt(count).match(/[aeiouAEIOU]/)){
                countVo++;
                setCount(countVo);
                props.showAlert("Vowel counted","success")
            }
        }
        // console.log("no of vowels are:"+ countVo);
    };

    // funcion to count consonants
    const handleConsClick = () =>{
        for(count1=0; count1<=text.length; count1++){
            if(text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)){
                countCons++;
                setCount1(countCons);
                props.showAlert("Consonant counted","success")
            }
        }
        // console.log("no of vowels are:"+ countVo);
    };

    const handleColorClick = () =>{
        // console.log('uppercase was clcked' + text);
        var newText = document.getElementById('myBox');
        newText.style.color="yellow";
        props.showAlert("Text color is changed","success")
        
    }

    const handleCopy = () => {
        console.log("I am copied");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard","success")
    }

    const handleSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    

   
    const handleOnChange = (event) =>{
        // console.log('on change');
        setText(event.target.value);
    }

   
    // global declarations
    const [text, setText] = useState("Enter text here");

    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    let countVo = 0,
        countCons = 0;
    // setText("Ramey ko nati");


    
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-3'>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value ={text} style={{backgroundColor: props.mode==='dark'?'rgb(14 69 114)':'white' , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" cols="30" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className='btn btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to Lowercase</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-3' onClick={handleClearClick}>Clear</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-3' onClick={handleVoClick}>Count Vowels</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-3' onClick={handleConsClick}>Count Consonants</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-3' onClick={handleColorClick}>Color Change</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>

        <button disabled = {text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

        <button disabled = {text.length===0} className='btn btn-primary mx-0' onClick={handleSpaces}>Clear Extra Spaces</button>


    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => {return element.length!==0;}).length} words & {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0;}).length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to preview here!"}</p>
    </div>

    <div className='container mx-3 my-3' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your vowel entered</h2>
        <p>{count} No. of vowels</p>
        <p>{count1} No. of consonants</p>
    </div>

    </>
    
  )
 }


