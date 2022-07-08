import React,{useState,useEffect} from 'react';
import topimg from './img/topmain.png'
import './rewards.css'
import concert from './img/rewards/concert.png'
import parking from './img/rewards/parking-cinema.png'
import reduction from './img/rewards/reduction.png'
import scan from './img/rewards/scan.png'
import ratp from './img/rewards/ratp.png'
import Navbar from "./navbar.js"
import Rewardsdescription from "./Rewardsdescription.js"
import axios from 'axios';
  
const Rewards = () => {
    function handlescan(){
        window.location.href = "/scan";

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
  
    const rewardssection = {"data":[ {
            "title":"Réduction",
            "img":reduction,
            "description":"Béneficez d’une réduction sur les produits patenaires Unipoints" 
        },{
            "title":"Parking & Cinéma",
            "img":parking,
            "description":" Profitez de places gratuites pour vous faciliter vos prochainsdéplacements." 
        },{
            "title":"Concert & Festival",
            "img":concert,
            "description":"Profitez des Fidelity en vous offrant des places pour écouter vos artistes préférés." 
        },{
            "title":"Tickets RATP",
            "img":ratp,
            "description":"Béneficie grâce à vos Fidelity d’une réduction pour vos voyages SNCF. " 
        },
    ],
      }
    return (
        <section id="rewards" >
            <Navbar/>
            <div className='top-section'>
            <img src={topimg} alt="" id='top-img' /> </div>
            <div className='scanqr' onClick={handlescan}> <img src={scan} alt="scan-QR-code" /></div>
            <div className='fidelity'>
                <p>Votre Solde</p>
                <div className='fidelity-points'>{points} fidelity</div>
            </div>
            <div className='rewards-manual' >
                <div className='rewards-title'>
                En quoi les convertir ?
                </div>
                { rewardssection.data.map(element =>{
                return  <Rewardsdescription title={element.title} img={element.img} description={element.description}  />

                })}
            </div>

        </section>
    );
}

export default Rewards;
