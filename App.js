import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled","success");
      // changing page title using js
      document.title = 'TextUtils - Dark Mode';

      To make a blinking dynamic title 
      setInterval(() => {
        document.title = 'TextUtils is an amazing Mode';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextUtils right now!';
      }, 1500);
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","primary");
      
    }
    
  }

  const joggleMode = () => {
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor='blueviolet';
      showAlert("Blue mode is enabled","success");
      document.title = 'TextUtils - Blue Mode';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","primary");
    }
    
  }
  return (
    <>
    
{/* <Navbar title="TextUtils" aboutText="About Us"/> */}

<Navbar title="TextUtils" aboutText="About" mode= {mode} toggleMode={toggleMode} joggleMode={joggleMode}/>
<Alert alert={alert}/>

<div className="container my-3" >

<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode= {mode}/>

{/* <About/> */}
</div>

    </>
  );
}

export default App;
