import React from 'react'

function ScreenContainer({children,style}) {
  return (<>
     <div style={{paddingTop:"5%",paddingLeft:"5%",paddingRight:"10%",...style}}>
        {children}
    </div>
  </>
   
  )
}

export default ScreenContainer;