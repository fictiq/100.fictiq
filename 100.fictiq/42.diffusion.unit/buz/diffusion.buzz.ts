import { DiffusionModel } from "../diffusion.model";
import DiffusionBit from "../fce/diffusion.bit";
import State from "../../99.core/state";


export const initDiffusion = (cpy: DiffusionModel, bal: DiffusionBit, ste: State) => {
    debugger
    return cpy;
};

export const updateDiffusion = (cpy: DiffusionModel, bal: DiffusionBit, ste: State) => {
    return cpy;
};



const { exec } = require('child_process');

var tmp00 = 'MouseMove, 196, 332'
var tmp01 = 'send {RButton}'
var tmp02 = 'Send, ^a'
var tmp03 = 'Sleep, 1150'
var tmp04 = 'Send, ^c'
var tmp05 = 'Send supernatural political spy thriller lizard-skull-gator-man<lora:lizard-skull-gator-man:1.703693> '
var tmp06 = 'Sleep, 1150'
var tmp07 = 'Sleep, 1500'
var tmp08 = 'send {RButton}'
var tmp09 = 'Sleep, 115'
var tmp10 = 'Sleep, 115'
var tmp11 = 'Sleep, 1500'
var tmp12 = 'Sleep, 115'
var tmp13 = 'Sleep, 115'


var tmp14 = 'Sleep, 115'
var tmp15 = 'Sleep, 115'
var tmp16 = 'Sleep, 115'
var tmp17 = 'Sleep, 115'
var tmp18 = 'Sleep, 115'

var tmp19 = 'Sleep, 3150'
var tmp20 = 'MouseMove, 1111, 345'


var tmp21 = 'Sleep, 3150'
var tmp22 = 'send {RButton}'
var tmp23 = 'Sleep, 1150'



export const captureDiffusion = (cpy: DiffusionModel, bal: DiffusionBit, ste: State) => {



    var FS = require('fs-extra')

    var list = [tmp00, tmp01, tmp02, tmp03, tmp04, tmp05, tmp06, tmp07, tmp08, tmp09, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22, tmp23]

    var output = list.join('\n')

    //FS.writeFile('capture.ahk', output)

    exec('capture.ahk', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing batch file: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        //setTimeout(action, 60000 * 5 + 10300)
    });



    //}
    //setTimeout(action, 13000)


    return cpy;
};


