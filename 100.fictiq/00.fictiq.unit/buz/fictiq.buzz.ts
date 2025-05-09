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


const { spawn, exec } = require('child_process');
const path = require('path');

export const initFictiq = async (cpy: FictiqModel, bal: FictiqBit, ste: State) => {

    bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, src: bal.src, lst: [ActFtq], dat: bal.dat });
    if (bal.val == 1) {
        bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});
        setTimeout(async () => {
            bit = await ste.hunt(ActMnu.INIT_MENU, {});
        }, 33)
    }


    setTimeout(async () => {
        //bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "--- fictiq bundled" });
        if (bal.slv != null) bal.slv({ intBit: { idx: "init-fictiq" } });
    }, 3);


    return cpy;

};

export const updateFictiq = (cpy: FictiqModel, bal: FictiqBit, ste: State) => {
    return cpy;
};


export const batchFictiq = (cpy: FictiqModel, bal: FictiqBit, ste: State) => {


    //bal.idx = the root directory the app needs to return too
    //bal.src = the directory the program needs to go into
    //bal.dat.batch = the name of the batch file


    if (bal.src == null || bal.idx == null) {
        bal.slv({ ftqBit: { idx: "batch-fictiq-error", src: 'params' } })
        return
    }

    if (bal.dat == null || bal.dat.batch == null) {
        bal.slv({ ftqBit: { idx: "batch-fictiq-error", src: 'params' } })
        return
    }

    process.chdir('../');
    process.chdir('./' + bal.src);
    launchBatchFile('D:/' + bal.src + '/' + bal.dat.batch);
    process.chdir('../');
    process.chdir('../' + bal.idx);

    bal.slv({ ftqBit: { idx: "batch-fictiq", src: bal.src } })
    return cpy;
};

export const openFictiq = (cpy: FictiqModel, bal: FictiqBit, ste: State) => {

    var batch;

    const { spawn } = require('child_process');
    const path = require('path');

    // Simulate some work
    //setTimeout(() => {
    //  console.log('Work completed.');
    //  process.exit(0); // Exit with success code
    //}, 10000);

    function launchBFile(userInputPath) {
        const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

        batch = spawn('cmd', ['/c', sanitizedPath]);

        batch.stdout.on('data', async (data) => {
            bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `stdout: ${data}` })
        });

        batch.stderr.on('data', async (data) => {
            bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `stderr: ${data}`, dat: { clr: 'red' } })
        });

        batch.on('close', async (code) => {
            console.log();
            bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: `child process exited with code ${code}` })
            //FS.emptyDir( dest, ()=>{
            //  FS.copySync('./dist/win-unpacked/' , dest )
            //})


        });

    }



    launchBFile(process.env.FICTIQ_BAT);

    launchBFile(process.env.NEXTJS_BAT);




    bal.slv({ shdBit: { idx: "open-shade", dat: {} } });


    return cpy;
};


const launchBatchFile = (userInputPath) => {
    const sanitizedPath = path.normalize(userInputPath); // Sanitize the path
    const batch = spawn('cmd', ['/c', sanitizedPath], { detached: true, stdio: 'ignore', shell: true });
    console.log('Batch file launched! ' + userInputPath);
}


