import { KitchenModel } from "../kitchen.model";
import KitchenBit from "../fce/kitchen.bit";
import State from "../../99.core/state";

import * as ActCns from "../../83.console.unit/console.action";

const { spawn, exec, spawnSync } = require('child_process');
const path = require('path');

var consoleProcess, pid, bit;

export const initKitchen = (cpy: KitchenModel, bal: KitchenBit, ste: State) => {
    bal.slv({ intBit: { idx: "init-kitchen" } });
    return cpy;
};

export const openKitchen = async (cpy: KitchenModel, bal: KitchenBit, ste: State) => {

    if (bal.idx == null) {
        bal.slv({ ftqBit: { idx: "open-kitchen-error", src: 'params' } })
        return
    }

    process.chdir('../');
    process.chdir('./kitchen');
    process.chdir('./diffusion');

    const userInputPath = 'D:/kitchen/diffusion/webui.bat';

    const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

    consoleProcess = await spawn('cmd', ['/c', sanitizedPath], { detached: true, shell: true });

    //bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'Batch file launched! ' + userInputPath })

    process.chdir('../');
    process.chdir('../');
    process.chdir('../' + bal.idx);

    bal.slv({ intBit: { idx: "open-kitchen" } });
    return cpy;
};

export const closeKitchen = async (cpy: KitchenModel, bal: KitchenBit, ste: State) => {

    const userInputPath = 'D:/100.fictiq/vrt.kil.bat';
    const sanitizedPath = path.normalize(userInputPath);

    consoleProcess = await spawn('cmd', ['/c', sanitizedPath], { detached: true, shell: true });
    setTimeout(async () => { consoleProcess = await spawn('cmd', ['/c', sanitizedPath], { detached: true, shell: true }) }, 111)

    bal.slv({ intBit: { idx: "close-kitchen" } });
    return cpy;
};

export const updateKitchen = (cpy: KitchenModel, bal: KitchenBit, ste: State) => {

    bal.slv({ intBit: { idx: "update-kitchen" } });
    return cpy;
};




