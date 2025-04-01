const { spawn, exec } = require('child_process');
const path = require('path');

export const initKitchen = (cpy: KitchenModel, bal: KitchenBit, ste: State) => {

    bal.slv({ intBit: { idx: "init-kitchen" } });

    return cpy;
};

export const openKitchen = (cpy: KitchenModel, bal: KitchenBit, ste: State) => {

    process.chdir('../');
    process.chdir('./kitchen');
    process.chdir('./diffusion');
    launchBatchFile('D:/kitchen/diffusion/webui.bat');
    process.chdir('../');
    process.chdir('../');
    process.chdir('../000.fictiq.services');


    bal.slv({ intBit: { idx: "open-kitchen" } });

    return cpy;
};

export const updateKitchen = (cpy: KitchenModel, bal: KitchenBit, ste: State) => {
    return cpy;
};


function launchBatchFile(userInputPath) {
    const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

    const batch = spawn('cmd', ['/c', sanitizedPath], {
        detached: true,
        stdio: 'ignore',
        shell: true
    });

    //batch.stdout.on('data', (data) => {
    //  console.log(`stdout: ${data}`);
    //});

    //batch.stderr.on('data', (data) => {
    //  console.error(`stderr: ${data}`);
    //});

    //batch.on('close', (code) => {
    //  console.log(`child process exited with code ${code}`);
    //});

    //app.on('before-quit', () => {
    //  console.log('CLOSE OUT: ' + batch);
    // batch.kill('SIGKILL');
    //});

    console.log('Batch file launched!');
}


import { KitchenModel } from "../kitchen.model";
import KitchenBit from "../fce/kitchen.bit";
import State from "../../99.core/state";