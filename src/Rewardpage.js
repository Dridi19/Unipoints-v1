import React,{useState,useEffect} from 'react'
import './Rewardpage.css'
import axios from 'axios';
import openlock from './img/openlock.png'
import closedlock from './img/closedlock.png'
import Navbar from "./navbar.js" 

export default function Rewardpage() {
    function handlereward(){
        window.location.href = "/reduction";
    }
    const [points,setpoints] = useState(0)
    const local_storage_key ="user_id"
    useEffect(()=>{
      const isuserloggedin = JSON.parse(localStorage.getItem(local_storage_key))
      if (isuserloggedin){
        var request = "http://localhost:5000/users/" + isuserloggedin
        axios.get(request)
        .then(res => setpoints(res.data));
      }else{        window.location.href = "/";
    }
    },[])
    const calc1 = ((points/200)*100).toString()+"%"
    const calc2 = (points/500)*100
    const calc3 = (points/800)*100
  return (
    
    <>
    <Navbar/>   
                <div className="reward-boxes">
                <div className="box_benefice">
                    
                        <span className="benefice">Réduction</span>
                        
                        <div className="benefice1" >
                            <img src={openlock} alt=""></img>
                            <span className="points7">{points}/150</span>
                        
                        </div>
                        <div className="activer_offre1">
                            <span className="activer_offre" onClick={handlereward}>Activer l'offre  </span>
                        </div>
                    </div>
                    <div className="box_benefice">
                        <span className="benefice">Parking  et Cinéma</span>
                        <div className="benefice2">
                                <div className='currentprogress' style={{background:"#6ACF8C",width:`${calc1}`,borderRadius:"15px"}} >
                            <img src={closedlock} alt=""></img>
                            <span className="points7">{points}/200</span>

                            </div>

                        </div>
                        <div className="activer_offre1">
                            <span className="activer_offre">Activer l'offre  </span>
                        </div>
                    </div>
                    <div className="box_benefice">
                        <span className="benefice">Concert  et Festival</span>
                        <div className="benefice2" >
                        <div className='currentprogress' style={{background:"#6ACF8C",width:`${calc2}%`,borderRadius:"15px"}} >
                            <img src={closedlock} alt=""></img>
                            <span className="points7">{points}/500</span>
                            </div>
                        </div>
                        <div className="activer_offre1">
                            <span className="activer_offre">Activer l'offre</span>
                        </div>
                    </div>
                    <div className="box_benefice">
                        <span className="benefice">Tickets RATP</span>
                        <div className="benefice2">
                        <div className='currentprogress' style={{background:"#6ACF8C",width:`${calc3}%`,borderRadius:"15px"}} >
                            <img src={closedlock} alt=""></img>
                                                        <span className="points7">{points}/800</span>

                            </div>
                        </div>
                        <div className="activer_offre1">
                            <span className="activer_offre">Activer l'offre    </span>
                        </div>
            </div>
            </div>
</>
)
}
