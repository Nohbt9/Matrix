import React from 'react'
import "../../styles/home.css"
function Welcome() {
  return (
   <>
    <div class="welcome_container" style={{height:600,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
       <h1>Welcome to GoNews</h1>
       <p>GoNews is your place to find your nearby News</p>
       <button style={{backgroundColor:"black",color:"white",marginTop:15}} class="nav_button">Go to news</button>
    </div>
   </>
  )
}

export default Welcome