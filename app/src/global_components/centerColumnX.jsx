function CenterColumnX({children,style}){

    return (<>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",...style}}>
          {children}
        </div>
    </>);

}

export default CenterColumnX;