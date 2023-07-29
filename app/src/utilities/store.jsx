import { createContext, useContext,useState } from "react";
import Home from "../pages/Home/Home";
export const User=createContext();
function Store({children}){
//
//centralized states
const [signedIn,setSignIn]=useState(false);
const [screenState,setScreenState]=useState(<Home/>);
return <>
<User.Provider value={{screenState,setScreenState}}>
{children}
</User.Provider>

</>
}

export default Store;