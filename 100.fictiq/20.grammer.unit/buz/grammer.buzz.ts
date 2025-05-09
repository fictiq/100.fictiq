

import { GrammerModel } from "../grammer.model";
import GrammerBit from "../fce/grammer.bit";
import State from "../../99.core/state";


import * as ActPmt from "../../act/prompt.action";
import * as ActOlm from "../../act/ollama.action";

var bit, lst


export const initGrammer = (cpy: GrammerModel, bal: GrammerBit, ste: State) => {
    debugger
    return cpy;
};

export const updateGrammer = (cpy: GrammerModel, bal: GrammerBit, ste: State) => {
    return cpy;
};


export const openGrammer = (cpy: GrammerModel, bal: GrammerBit, ste: State) => {

    var FS = require('fs-extra')

    var list = FS.readFileSync('./data/input.md').toString().split('\n')

    var dex = 0;

    var next = async () => {

        if (dex >= list.length) {


            debugger
        }


        var itm = list[dex]
        dex += 1

        var outnum = itm.split(' ').length + 3

            

        var message = 'Please correct the spelling and grammar of the following text in the brackets [ ' + itm 
        message += '] use the markdown file formate and s how the corrected work in bold so I can see what has been corrected. '


        bit = await ste.hunt(ActPmt.WRITE_PROMPT, { src: message, val: 1 })
        bit = await ste.hunt(ActOlm.WRITE_OLLAMA, { src: 'committing control' })
        lst = bit.olmBit.lst

        
        debugger

        await next()






    }


    next()


    return cpy;
};
export const writeGrammer = (cpy: GrammerModel, bal: GrammerBit, ste: State) => {
    debugger
    return cpy;
};