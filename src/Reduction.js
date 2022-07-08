import React,{useEffect,useRef,useState} from 'react'
import Navbar from "./navbar.js"
import axios from 'axios';
export default function Reduction() {
  const ammount = useRef()
  const local_storage_key ="user_id"
  const [points,setpoints] = useState(0)
  const isuserloggedin = JSON.parse(localStorage.getItem(local_storage_key))
  useEffect(()=>{
    if (isuserloggedin){
      var request = "http://localhost:5000/users/" + isuserloggedin
      axios.get(request)
      .then(res => setpoints(res.data));
    }else{        window.location.href = "/";
  }
  },[])


  function handlecoupon(){
    const pointstospen = ammount.current.value
    if(!pointstospen || !isuserloggedin  || pointstospen > points || pointstospen <=0 ){
      alert("please enter the points you want to spend")
      return}
      const user ={"id": isuserloggedin,
      "points": "-" +pointstospen,}
     axios.post('http://localhost:5000/users/addpoints', user)
     .then(res => alert(res.data))
     .then(window.location.href = "/coupon");
    console.log(pointstospen)
  }
  return (
    <> <Navbar/>
    <div className='reduction-content' >
            <div className='reduction-top'> 
            Combien de points voulez-vous utiliser ?
            </div>
            <input type="number" ref={ammount} className='reduction-amount' />
            <input type="button" className='reduction-submit' onClick={handlecoupon} value="Obtenir le code" />

    </div>
    </>
  )
}
