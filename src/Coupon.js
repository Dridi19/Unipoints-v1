import React from 'react'
import './coupon.css';
import Navbar from "./navbar.js"
import qrtest from './img/testqr.PNG'
export default function Coupon() {
  return (
    <section id="coupon">
    <Navbar/>
    <div className="container">
        <div className="Title1">
            <p className="title1">Felecitation vous avez gagner une reduction de 5%  </p>
        </div>
        <div className="Title2">
            <p className="title2">Scanner QR code</p>
        </div>
        <div className="QRcode">
            <div id="QRcode">
                <img src={qrtest} alt="QRcode"></img>
            </div>
        </div>
        <div className="or">
            <p id="or">or</p>
        </div>
        <div className="btn-ajouter">
            <div className="ajouter" onClick={()=>{window.location.href = "/rewards";}}  >
                <button  id="ajouter">Ajouter pour utiliser plus tard</button>
            </div>
        </div>
    </div>
</section>
  )
}
