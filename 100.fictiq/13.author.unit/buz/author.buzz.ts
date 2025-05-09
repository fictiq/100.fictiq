import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActPmt from "../../12.prompt.unit/prompt.action";
import * as ActAut from "../author.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, val, idx, dex, lst, dat;

export const initAuthor = (cpy: AuthorModel, bal: AuthorBit, ste: State) => {
    debugger
    return cpy;
};

export const updateAuthor = (cpy: AuthorModel, bal: AuthorBit, ste: State) => {
    return cpy;
};


export const readAuthor = (cpy: AuthorModel, bal: AuthorBit, ste: State) => {
    
    bal.slv({ autBit: { idx: "read-author", src: cpy.author } });
    return cpy;
};

export const writeAuthor = async (cpy: AuthorModel, bal: AuthorBit, ste: State) => {
    
    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/author/' + bal.src })
    
    dat = bit.dskBit.dat;
    cpy.author = dat

    bal.slv({ autBit: { idx: "write-author", src: cpy.author } });
    return cpy;
};

export const listAuthor = async (cpy: AuthorModel, bal: AuthorBit, ste: State) => {
    
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/author/' })
    lst = bit.dskBit.lst
    bal.slv({ autBit: { idx: "list-author", lst } });
    return cpy;
};


import { AuthorModel } from "../author.model";
import AuthorBit from "../fce/author.bit";
import State from "../../99.core/state";