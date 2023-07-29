import React from 'react'
import axios from "axios";
import { useState } from 'react';
function SignUp() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [pincode,setPincode]=useState("");
    function passwordset(e){
 
        setPassword(e.target.value);
     }
     function usernameset(e){
     setUsername(e.target.value);
     }
     function pincodeset(e){
        setPincode(e.target.value);
        }
  return (
    <div style={{marginTop:250,display:"flex",flexDirection:'row',justifyContent:"center"}}>
<div>
<p>Username</p>
    <input onChange={usernameset} type="text" />
    <p>Password</p>
    <input onChange={passwordset} type="text" />
   <br />
   <p>Pincode</p>
    <input onChange={pincodeset} type="text" />
   <br />
    <button onClick={async ()=>{
       const {data}=await  axios.post("http://localhost:800/createUser",{username:username,password:password,pincode:pincode});
       console.log(data.code);
    }}>Sign In</button>
</div>
</div>
  );
}

export default SignUp;