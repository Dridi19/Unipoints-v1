import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios';
import topimg from './img/topmain.png'
import newlogo from './img/newlogo.png'
export default function Login() {

  const local_storage_key ="user_id"
  useEffect(()=>{
    const isuserloggedin = JSON.parse(localStorage.getItem(local_storage_key))
    if (isuserloggedin){
      window.location.href = "/home";
    }},[])

  const [id,setid] = useState("")
  const email = useRef();
  const password = useRef();
  function handleregister(){
    const user ={
    "emiladress":email.current.value,
   "password": password.current.value}

   axios.post('http://localhost:5000/users/login', user)
   .then(res => setid(res.data._id));
   console.log(id)
   if (id){
    setuserid(id)
   }

   }
async function setuserid(id){
      await localStorage.setItem(local_storage_key, JSON.stringify(id))
      window.location.href = "/home";}
function gotoregister(){
  window.location.href = "/register";

}
  return (
    
    <div>
      <div className='top-section'>
            <img src={topimg} alt="" id='top-img' /> 
            </div>
                    
            <div className='top-content'>
            <img src={newlogo} alt="" id='newlogo' /> </div>
        <form class="forml">

                          <div className='forum-inputs'>
                        <input type="text" ref={email} placeholder="Entrer votre Email" class="textbox" />
                        <input type="password" ref={password} placeholder="Entrer votre mot de passe  " class="textbox" />
                        </div>
        </form> 

        <div className='login-btn' >
          <input type="button" className='next-btn' value="Se connecter" onClick={handleregister} />
          </div>
          <div className='login-bottom' style={{marginTop:"4vh"}}>
              <p> Mot de passe oublié ?  </p>
              <p style={{marginLeft:"10px",marginRight:"10px"}} >|</p>
               <p onClick={gotoregister}> Crée un compte </p>
        </div>
    </div>
  )
}
