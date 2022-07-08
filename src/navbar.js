import React from 'react'
import './navbar.css';
import home from './img/acceuil.png'
import reward from './img/cadeau.png'
import map from './img/map.png'
import settings from './img/parametres.png'

export default function navbar() {
  return (
    <div className='navbar' >
        <ul>
            <li onClick={()=>{        window.location.href = "/home";} }>
                <a href="home"><img src={home} alt="w" /> </a>
                <p>Acceuil</p>
            </li>
            <li onClick={()=>{        window.location.href = "/maps";} } >
            <a href="maps"><img src={ map} alt="w"  /> </a>
            <p>Carte</p>
            </li>
            <li onClick={()=>{        window.location.href = "/rewards";} } >
            <a href="rewards"><img src={reward} alt="w"  /> </a>
            <p>Rewards</p>

            </li>
            <li onClick={()=>{        window.location.href = "/settings";} } >
            <a href="settings"><img src={settings} alt="w"  /> </a>
            <p>Paramètres</p>

            </li>
        </ul>
    </div>
  )
}
