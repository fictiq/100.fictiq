
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


export const initSetting = (cpy: SettingModel, bal: SettingBit, ste: State) => {
    debugger
    return cpy;
};

export const updateSetting = (cpy: SettingModel, bal: SettingBit, ste: State) => {
    return cpy;
};


export const readSetting = (cpy: SettingModel, bal: SettingBit, ste: State) => {

    bal.slv({ setBit: { idx: "read-setting", src: cpy.setting } });

    return cpy;
};

export const writeSetting = async (cpy: SettingModel, bal: SettingBit, ste: State) => {

    bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/setting/' + bal.src })

    dat = bit.dskBit.dat;
    cpy.setting = dat

    bal.slv({ setBit: { idx: "write-setting", src: cpy.setting } });

    return cpy;
};

export const listSetting = async (cpy: SettingModel, bal: SettingBit, ste: State) => {

    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/setting/' })
    lst = bit.dskBit.lst
    bal.slv({ setBit: { idx: "list-setting", lst } });

    return cpy;
};


import { SettingModel } from "../setting.model";
import SettingBit from "../fce/setting.bit";
import State from "../../99.core/state";