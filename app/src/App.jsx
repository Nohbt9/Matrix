import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CenterColumnX from './global_components/centerColumnX';
import CenterRowX from './global_components/centerRowX';
import CenterColumnXY from './global_components/centerColumnXY';
import CenterRowXY from './global_components/centerRowXY';

import Create from './utilities/store';
import Store from './utilities/store';
import { useContext } from 'react';
import { User } from './utilities/store';
import NavBarContainer from './global_components/navBarContainer';
import NavBar from './pages/Home/navbar';
import ScreenContainer from './global_components/screenContainer';
// bring the fixed navbar componenet and the screen
/*{
  componentName:,
  stateName:,
  stateValue:
} */

function App() {

      const {screenState}=useContext(User);
  return  <>
    <>
       <NavBar/>
       <ScreenContainer>
       {screenState}
       </ScreenContainer>
      
    </>
  </>
    

   
    
    
       
     
   
}

export default App;
