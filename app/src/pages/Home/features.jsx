import React from 'react'
import i from  "./gif/location.gif"
import i2 from  "./gif/shield.gif"
import i3 from "./gif/shopping-cart.gif"
import "../../styles/feature.css"
import CenterColumnXY from '../../global_components/centerColumnXY'

function Features() {
  return (
    <div class="parent_feat">
        <div className='feat_cont' style={{display:"flex",flexDirection:"row"}}>

        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className='feat_img' src={i} alt="" />
        </div>

            <p class="feat_p" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>Get news of any locality by changing the pincode</p>
      
        </div>
         


        <div className='feat_cont' style={{display:"flex",flexDirection:"row"}}>

        <p class="feat_p" style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>Make your own Cart by Adding and Removing your favourite News</p>


        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className='feat_img'  src={i3} alt="" />
        </div>
      
        </div>



        <div className='feat_cont' style={{display:"flex",flexDirection:"row"}}>

        <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img className='feat_img' src={i2} alt="" />
        </div>

        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <p class="feat_p">Make Go News grow by adding news about your locality
        <div style={{fontSize:15,color:"red"}}>***Only the verified user can post news on GonNews</div>
        </p>
       
        </div>
        </div>
    </div>
  )
}

export default Features