import logo from './key.ico';
import './App.css';


const checked = () =>{
 let check = document.getElementById('check');
 if(check.checked === true){
  let genPass = document.getElementById('passowrd')
 let randomstring = Math.random().toString(36).slice(-10);
 
 genPass.innerHTML=randomstring
 }else{
  let genPass = document.getElementById('passowrd')
  let randomstring = Math.random().toString(36).slice(-8);
  
  genPass.innerHTML=randomstring
 }
 
}


 async function copyPass(){
    let genPass = document.getElementById('passowrd')
    let content = genPass.textContent
    try{
      await navigator.clipboard.writeText(content);
      alert("copied")
    }catch(error){
       console.log(error)
    }

 }



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" id='image' />
        <h3>Click On Button To Generate <br/>Password 😎 🔒</h3>
        <small className='check'><b>8 characters default</b></small>
        <small className='check'>Check for 10 characters <input type="checkbox" id='check'onClick={checked} ></input></small>
         <p id='passowrd'></p>

      </header>
      <button id='btn' onClick={checked}>Generate </button> &nbsp;  <button id='btn-copy' onClick={copyPass}>Copy </button>  
       
    </div>
  );
}

export default App;
