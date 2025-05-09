import * as ActBab from '../111.solid/01.babylon.unit/babylon.action'

import * as ActGlb from '../111.solid/09.glop.unit/glop.action'


export default function HexagonTest () {

    var bit;

    setTimeout( async ()=>{
    
        bit =  await window['SOLID']( ActBab.OPEN_BABYLON, {src:'surface00'})
        bit =  await window['SOLID']( ActGlb.WRITE_GLOP, {idx:'glp00'})
    
    }, 333)


}

