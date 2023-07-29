import React from 'react'
import { useState } from 'react';
import axios from "axios";
function News() {
    async function getNewsonpin(){
        const {data}=await axios.post("http://localhost:800/getNewsonpin",{pincode:pincode});
        setNews(data.news.map(({webpage,num_visits,num_readers})=>{
           return <>
               <div style={{border: "3px solid rgb(108, 110, 111)",margin:20,borderRadius: 30,paddingTop:20,paddingBottom:20,paddingRight:15,paddingLeft:15,boxShadow:"0 0 4px grey"}}>
                   <a target="_blank" href={webpage}>{webpage}</a>
                   <p>Number of visits {num_visits}</p>
                   <p>Number of readers {num_readers}</p>
               </div>
           </>;
        })); 
    }
    async function getNews(){
     const {data}=await axios.post("http://localhost:800/getNews",{username:localStorage.getItem("username")});
     setNews(data.news.map(({webpage,num_visits,num_readers})=>{
        return <>
            <div>
                <a target="_blank" href={webpage}>{webpage}</a>
                <p>Number of visits {num_visits}</p>
                <p>Number of readers {num_readers}</p>
            </div>
        </>;
     }));
    }
    function pincodeset(e){
        setPincode(e.target.value);
        }
    const [pincode,setPincode]=useState("");
    const [news,setNews]=useState([]);
  return (
   
      <div style={{marginTop:250,display:"flex",flexDirection:'column',alignItems:"center"}}>
        <button onClick={getNews}>Get News for your own Locality</button>
        <br />
        <br />
        <input onChange={pincodeset} type="text" placeholder='Enter pin' name="" id="" />
        <button onClick={getNewsonpin}>Get News for other locality</button>
         <div>
            {news}
         </div>
      </div>


  )
}

export default News;