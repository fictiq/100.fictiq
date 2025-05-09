import { useState } from 'react';


import GatorManTest from "@ui/test/GatorManTest"

let dex = 0

let bit;

export default function EarthlyDecorativeFrame() {

    
    let sim;
    let bus

    const setBus = (obj) => {
        if (dex > 0) return
        dex += 1
        sim = obj;  
    };


    bus = (idx, bal) => sim.hunt(idx, bal)

   

        return (<div>
            


        </div>)
    }

    


