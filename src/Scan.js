import React, { useState,useEffect } from 'react';
import { QrReader } from 'react-qr-reader';
import Navbar from "./navbar.js" 
import axios from 'axios';
export default function Scan() {
    const [data, setData] = useState('No result');
    const [useddata, setusedData] = useState([]);
    const local_storage_key ="user_id"
    const isuserloggedin = JSON.parse(localStorage.getItem(local_storage_key))
    useEffect(()=>{
      if (!isuserloggedin){
         window.location.href = "/home"}
    },[])

    useEffect(() => {
        if(data.startsWith('add') && !useddata.includes(useddata) ){
            var points = data.substring(3)
            const lastused = [...useddata]
            lastused.push(data)
            setusedData(lastused)
            console.log(points)
            const user ={"id": isuserloggedin,
            "points":points,}
    
           axios.post('http://localhost:5000/users/addpoints', user)
           .then(res => alert(res.data))
           .then(window.location.href = "/rewards");

        }
    }, [data]);
  return (
    <>
      <Navbar/>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
    </>
  );
}
