import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActPmt from "../../12.prompt.unit/prompt.action";
import * as ActAut from "../../13.author.unit/author.action";
import * as ActGen from "../../14.genre.unit/genre.action";
import * as ActSet from "../../15.setting.unit/setting.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, val, idx, dex, lst, dat, src;

export const initPrompt = (cpy: PromptModel, bal: PromptBit, ste: State) => {
    debugger
    return cpy;
};

export const updatePrompt = (cpy: PromptModel, bal: PromptBit, ste: State) => {
    return cpy;
};

export const listPrompt = async (cpy: PromptModel, bal: PromptBit, ste: State) => {
    bit = await ste.bus(ActDsk.INDEX_DISK, { src: './lore/prompt/' })
    lst = bit.dskBit.lst
    bal.slv({ pmtBit: { idx: "list-prompt", lst } });
    return cpy;
};

export const readPrompt = async (cpy: PromptModel, bal: PromptBit, ste: State) => {

    bit = await ste.hunt(ActAut.READ_AUTHOR, {})
    var author = bit.autBit.src;

    bit = await ste.hunt(ActGen.READ_GENRE, {})
    var genre = bit.genBit.src;

    bit = await ste.hunt(ActSet.READ_SETTING, {})
    var setting = bit.setBit.src;

    var gel = { setting, genre, author };
    var out = [];

    var prompt = cpy.prompt;
    var output = prompt.split('\n')

    output.forEach((a, b) => {
        if (a.includes('//') == true) return
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        out.push(outLine);
    });

    src = out.join('\n')

    bal.slv({ pmtBit: { idx: "read-prompt", src } });

    return cpy;
};


export const writePrompt = async (cpy: PromptModel, bal: PromptBit, ste: State) => {

    if (bal.val == null) {

        bit = await ste.hunt(ActPmt.LIST_PROMPT, {})
        bit = await ste.bus(ActDsk.READ_DISK, { src: './lore/prompt/' + bal.src })
        dat = bit.dskBit.dat;
        cpy.prompt = dat
        bit = await ste.hunt(ActPmt.READ_PROMPT, {})
        src = bit.pmtBit.src

    } else {
        cpy.prompt = bal.src

        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "writing prompt:" })
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: cpy.prompt })
    }

    bal.slv({ pmtBit: { idx: "write-prompt", src } });

    return cpy;
};

import { PromptModel } from "../prompt.model";
import PromptBit from "../fce/prompt.bit";
import State from "../../99.core/state";

import * as S from 'string'
import * as doT from "dot";