import State from "../../99.core/state";

import * as S from 'string'

import { FictiqModel } from "../fictiq.model";
import FictiqBit from "../fce/fictiq.bit";

import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActFtq from "../../00.fictiq.unit/fictiq.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActDsk from "../../96.disk.unit/disk.action";
import * as ActCns from "../../83.console.unit/console.action";
import * as ActBus from "../../99.bus.unit/bus.action";
import * as ActTrm from "../../80.terminal.unit/terminal.action";

import * as ActPvt from "../../act/pivot.action";
import * as ActSow from "../../act/sower.action";

var bit, lst, dex, src, dat;

export const initFictiq = async (cpy: FictiqModel, bal: FictiqBit, ste: State) => {


    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActFtq], dat: bal.dat });

    if (bal.val == 1) {


        bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});

        bit = await ste.hunt(ActMnu.INIT_MENU, {});

    }



    setTimeout(async () => {

        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "--- fictiq bundled" });

        if (bal.slv != null) bal.slv({ intBit: { idx: "init-fictiq" } });
    }, 3);


    return cpy;


    return cpy;
};

export const updateFictiq = (cpy: FictiqModel, bal: FictiqBit, ste: State) => {
    return cpy;
};



