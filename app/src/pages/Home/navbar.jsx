import React from 'react'
import NavBarContainer from '../../global_components/navBarContainer';
import CenterRowX from '../../global_components/centerRowX';
import "../../styles/navbar.css"
import { useContext } from 'react';
import { User } from '../../utilities/store';
import SignIn from '../authentication/sigin';
import News from '../News/news';
function NavBar() {
    const {setScreenState}=useContext(User);
  return (
    <>
      <div>
      <NavBarContainer style={{paddingTop:20,paddingLeft:15,paddingRight:15,alignItems:"center",backgroundColor:"black",color:"white"}}>
         <h1>GoNews</h1>
         <CenterRowX>
          <p  class="nav_p">Home</p>
          <p onClick={()=>{setScreenState(<News/>);}} class="nav_p">News</p>
          <p class="nav_p">About us</p>
          </CenterRowX>
          <button onClick={()=>{setScreenState(<SignIn/>)}} class="nav_button" style={{marginRight:30}}>Sign Up/Sign In</button>
       

       </NavBarContainer>
      </div>
    </>
  )
}

export default NavBar;
