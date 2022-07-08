import './App.css';
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import Navbar from "./navbar.js"
import boulangerie from './img/boulangerie.png'
import week from './img/week.png'
import hetic from './img/hetic.jpg'
import verified from './img/verified.png'
import artisan from './img/artisan.png'




function App() {
  return (
    <div className="App">
      <Navbar/>
    <MapContainer center={[48.851, 2.42025601]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[48.852352497283874, 2.4210510352962444]}>
    <Popup className='walidaaaa' >
       <div className='nom-entreprise' style={{fontSize:"30px"}} > Boulangerie <img  style={{width:"20px"}}  src={verified} alt="" /> </div>
       <div className='small-description' style={{padding:"10px 0 "}} > 47 Rue Emile Zola </div>
       <div className='description' > Boulangerie compétente qui s’est installé dans le quartier depuis deja bientot 12 ans. </div>
       <img src={week} alt="" />
       <img src={boulangerie} style={{marginTop:"3vh"}} alt="" />
    </Popup>
  </Marker>
  <Marker position={[48.851, 2.42025601]}>
    <Popup className='walidaaaa' >
       <div className='nom-entreprise' style={{fontSize:"30px"}} > Hetic </div>
       <div className='small-description' style={{padding:"10px 0 "}} > 27 Bis Rue du Progrès, 93100 Montreuil </div>
       <img src={hetic} alt="" />

    </Popup>
  </Marker>
  <Marker position={[48.85679345609147, 2.3629078091744202]}>
    <Popup className='walidaaaa' >
    <div className='nom-entreprise' style={{fontSize:"30px"}} > Artisan Parfumeur <img  style={{width:"20px"}}  src={verified} alt="" /> </div>
       <div className='small-description' style={{padding:"10px 0 "}} > 19 Rue des Francs Bourgeois, 75004 Paris </div>
       <div className='description' > Artisan de renom implanté dans le quartier et maitre de son art depuis bientot 20 ans. </div>
       <img src={week} alt="" />
       <img src={artisan} style={{marginTop:"3vh"}} alt="" />

    </Popup>
  </Marker>
</MapContainer>


    </div>
  );
}

export default App;
{/* <img src={newlogo} style={{width:"83vw",height:"42vh",transform:"translate(-20px,-10px)"}} alt="" /> */}