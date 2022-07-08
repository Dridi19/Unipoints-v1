import React,{useState} from 'react'
import Navbar from "./navbar.js"
import topimg from './img/topmain.png'

export default function Settings() {
    const [background,setbackground] = useState("Mode sombre")
    function changebackground (){
        if(background === "Mode sombre" ){
            document.body.style.backgroundColor = "black";
            setbackground("Mode clair")
        }
        else{
            document.body.style.backgroundColor = "white";
            setbackground("Mode sombre")

        }
    }
    function disconnect(){
        localStorage.clear();
        window.location.href = "/";
    }
  return (
    <div>
        <div className='top-section'>
            <img src={topimg} alt="" id='top-img' /> 
            </div>
        <div className="settings">
        <input type="button" className='reduction-submit' onClick={changebackground} value={background} />
        <input type="button"  className='reduction-submit' onClick={disconnect}  value="Déconnection" />
        </div>
        <Navbar/>
    </div>
  )
}
