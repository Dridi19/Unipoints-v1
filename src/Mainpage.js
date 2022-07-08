import React from 'react';
import topimg from './img/topmain.png'
import newlogo from './img/newlogo.png'
import middle from './img/middle.png'
import './mainpage.css'
const Mainpage = () => {
    function relocatelogin(){
        window.location.href = "/login";
    }
    function relocateregister(){
        window.location.href = "/register";
    }
    return (
        <div>
            <div className='top-section'>
            <img src={topimg} alt="" id='top-img' /> 
            </div>
            <div className='top-content'>
            <img src={newlogo} alt="" id='newlogo' /> 
            <div className='middle-content'>
            <p>Tous ensemble, les Fidelity c'est ca aussi!</p>
            </div>
            <img src={middle} alt="" id='middle-img' />
            </div>
            <div className='bottom-content'> 
                <input  type="button" name="" id="bn60" value="Commencer"  onClick={relocateregister} /> 
                <div className='bottom-creation'><p>Déja un compte ?</p> <input type="button" name="" id="bn70" value="Connectez vous" onClick={relocatelogin} />  </div>
            </div>

        </div>
    );
}
export default Mainpage;