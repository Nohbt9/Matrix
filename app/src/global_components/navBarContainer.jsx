import React from 'react'

function NavBarContainer({children,style}) {
  return (
   <>
      <div>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"fixed",width:"100%",...style}}>{children}</div>
         </div>
   </>
  )
}

export default  NavBarContainer;