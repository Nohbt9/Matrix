import React from 'react'

function CenterRowX({children,style}) {
  return (
   <>
     <div style={{display:"flex",flexDirection:"row",justifyContent:"center",...style}}>
          {children}
        </div>
   </>
  )
}

export default CenterRowX