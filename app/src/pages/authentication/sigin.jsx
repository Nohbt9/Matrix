import React from 'react'
import CenterRowX from '../../global_components/centerColumnXY'
import { useContext } from 'react'
import { User } from '../../utilities/store'
import { useState } from 'react'
import SignUp from './signup'
import axios from "axios"
import Home from '../Home/Home'
function SignIn() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    function passwordset(e){
 
        setPassword(e.target.value);
     }
     function usernameset(e){
     setUsername(e.target.value);
     }
    const {setScreenState}=useContext(User);
  return (
    
<div style={{marginTop:250,display:"flex",flexDirection:'row',justifyContent:"center"}}>
<div>
<p>Username</p>
    <input onChange={usernameset} type="text" />
    <p>Password</p>
    <input onChange={passwordset} type="text" />
   <br />
    <button onClick={async ()=>{
       const {data}=await  axios.post("http://localhost:800/findUser",{username:username,password:password});
       console.log(data.code);
       if(data.code==1){
        localStorage.setItem("username",data.username);
        setScreenState(<Home/>);
       }
    }}>Sign In</button>
    <p onClick={()=>{setScreenState(<SignUp/>)}}>Sign Up</p>
</div>

</div>


   

    
  )
}

export default SignIn