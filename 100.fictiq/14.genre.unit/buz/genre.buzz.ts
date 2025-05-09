import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActPmt from "../../12.prompt.unit/prompt.action";
import * as ActAut from "../../13.author.unit/author.action";
import * as ActGen from "../../14.genre.unit/genre.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, val, idx, dex, lst, dat;

export const initGenre = (cpy: GenreModel, bal: GenreBit, ste: State) => {
    debugger
    return cpy;
};

export const updateGenre = (cpy: GenreModel, bal: GenreBit, ste: State) => {
    return cpy;
};


export const readGenre = (cpy: GenreModel, bal: GenreBit, ste: State) => {

    bal.slv({ genBit: { idx: "read-genre", src: cpy.genre } });
    return cpy;
};

export const writeGenre = async (cpy: GenreModel, bal: GenreBit, ste: State) => {

    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/' + bal.idx + '/' + bal.src })

    dat = bit.dskBit.dat;
    cpy.genre = dat

    bal.slv({ setBit: { idx: "write-setting", src: cpy.genre } });

    return cpy;
};

export const listGenre = async (cpy: GenreModel, bal: GenreBit, ste: State) => {

    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/' + bal.idx + '/' })
    lst = bit.dskBit.lst
    bal.slv({ genBit: { idx: "list-genre", lst } });

    return cpy;
};


export const subGenre = (cpy: GenreModel, bal: GenreBit, ste: State) => {
    bal.slv({ genBit: { idx: "sub-genre", lst: cpy.list } });
    return cpy;
};


import { GenreModel } from "../genre.model";
import GenreBit from "../fce/genre.bit";
import State from "../../99.core/state";