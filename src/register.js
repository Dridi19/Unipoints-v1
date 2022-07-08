import React,{useRef} from 'react'
import './register.css';
import topimg from './img/topmain.png'
import newlogo from './img/newlogo.png'
import axios from 'axios';

export default function Register() {
  const name = useRef();
  const email = useRef(); 
  const password = useRef();
  const cpassword = useRef();
    function handleregister(){
        if (!name.current.value  || !email.current.value || !password.current.value || !cpassword.current.value ){
           alert("fill all the informations")
           return
        }
        if (password.current.value !== cpassword.current.value){
          alert("verify that password matchs")
           return
        }

        const user ={"username": name.current.value,
        "emiladress":email.current.value,
       "password": password.current.value}

       axios.post('http://localhost:5000/users/add', user)
       .then(res => alert(res.data));
       window.location.href = "/";

    }
  return (
    <div className='account-forum'>
                        <div className='top-section'>
            <img src={topimg} alt="" id='top-img' /> 
            </div>
            <div className='top-content'>
            <img src={newlogo} alt="" id='newlogo' /> </div>
                        <form class="formp">
                          <div className='forum-inputs'>
                        <input type="text" ref={name} placeholder="Entrez votre nom complet" class="textbox" />
                        <input type="text" ref={email} placeholder="Entrer votre Email" class="textbox" />
                        <input type="password" ref={password} placeholder="Créer un mot de passe " class="textbox" />
                        <input type="password" ref={cpassword} placeholder="Confirmer votre mot de passe" class="textbox" />
                        </div>
                        </form> 
                        <div className='register-btn' >
                        <input onClick={handleregister} type="button" className='next-btn' value="Créer un compte"  />
                        </div>
                </div>
  )
}
