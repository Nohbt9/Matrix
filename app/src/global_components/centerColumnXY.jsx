import React from 'react'
import { useContext } from 'react';
import { User } from '../utilities/store';
//
//centers the children in x and y as a whole column
function CenterColumnXY({children,style}) {
  console.log(useContext(User));
  return (
    <>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",...style}}>
          {children}
        </div>
    </>
  )
}

export default CenterColumnXY;