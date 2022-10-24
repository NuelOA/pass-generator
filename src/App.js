import logo from './key.png'
import { useState } from 'react';
import './App.css';





const checked = () =>{
 let check = document.getElementById('check');
 if(check.checked === true){
  let genPass = document.getElementById('passowrd');
 let randomstring = Math.random().toString(36).slice(-10);
const secondString = randomstring.charAt(0).toUpperCase() + randomstring.slice(1);
//  genPass.innerHTML=secondString
 }else{
  let genPass = document.getElementById('passowrd')
  let randomstring = Math.random().toString(36).slice(-8);
  // genPass.innerHTML=randomstring
 }
 
}

const Generate = () =>{
  let check = document.getElementById('check');
  if(check.checked === true){
   let genPass = document.getElementById('passowrd')
  let randomstring = Math.random().toString(36).slice(-10);
 const secondString = randomstring.charAt(0).toUpperCase() + randomstring.slice(1);
  genPass.innerHTML=secondString
  }else{
   let genPass = document.getElementById('passowrd')
   let randomstring = Math.random().toString(36).slice(-8);
   genPass.innerHTML=randomstring
  }
  
 }


 async function copyPass(){
    let genPass = document.getElementById('passowrd')
    let content = genPass.textContent
    if(!content){
      alert("Nothing to copy. Generate password")
      return
    }else{
      try{
        await navigator.clipboard.writeText(content);
        alert("copied")
      }catch(error){
         console.log(error)
      }
    }
    

 }


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}



function App() {
  const [passState, setPassState] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" id='image' />
        <h3>Click Button To Generate Password 😎 🔒 <br/>8 Characters Default</h3>
      
         <p id='passowrd' data-placeholder='Generated password will show here'>{passState}</p>  
        <small className='check'>Check for 10 characters <input type="checkbox" className="toggle-item" id='check' onClick={checked} ></input></small>


      </header>
      <button id='btn' onClick={()=>Generate()}>Generate Password </button> &nbsp;  <button id='btn-copy' onClick={copyPass}>Copy Password</button>  
       
    </div>
  );
}

export default App;
