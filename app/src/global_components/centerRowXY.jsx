import React from 'react'
//centers the children in a row 
function CenterRowXY({children,style}) {
  return (
    <>
      <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",...style}}>
          {children}
        </div>
    </>
  )
}

export default CenterRowXY;