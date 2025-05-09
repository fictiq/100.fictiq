
import React from 'react'

import BabylonOpen from '../../view/002.BabylonOpen'

var open = false

const Test = (bus) => {

  if ( open == true ){

    setTimeout( ()=>{

      console.log("rolll")

      setTimeout( ()=> BabylonOpen('surface00'), 1111)
      //setTimeout( ()=> SurfaceRemove('fce00'), 2111)
  
  
    }, 222 )

    return (
      <div id='surface00'>
        Testing OPEN BABYLON EXIST
        
      </div>
    )
  
  }

  open = true
  



  

  return (
    <div>
      Testing Surface ADD 
    </div>
  )


}

export default Test


