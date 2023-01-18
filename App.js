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

<Navbar title="TextUtils" aboutText="About" mode= {mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>

<div className="container my-3" >

<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode= {mode}/>

{/* <About/> */}
</div>

    </>
  );
}

export default App;
