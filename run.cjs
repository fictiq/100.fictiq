require('dotenv').config();
const { spawn } = require('child_process');
const path = require('path');
const MQTT = require('async-mqtt');
const { program } = require('commander');

const PORT = 1002;
const wsPort = 8002;

var idx;
program.option('--first').option('-t, --separator <char>');
program.parse(process.argv);
const options = program.opts();
if (options['separator'] != null) idx = options['separator'];

const title = idx;

let dev = false
let pvt = false

if (title == 'development') dev = true
if (title == 'pivot') pvt = true

const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);

const httpServer = require('http').createServer()
const ws = require('websocket-stream')
ws.createServer({ server: httpServer }, aedes.handle)

httpServer.listen(wsPort, function () {
  console.log('Aedes MQTT-WS listening on port: ' + wsPort)
  aedes.publish({ topic: 'aedes/hello', payload: "I'm broker " + aedes.id })
});

server.listen(PORT, async () => {
    console.log('server started and listening on port ', PORT);

    var exec  = require('child_process').exec;

    exec('tsc -b 100.fictiq', async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        init(PORT);

        })


});

var batch;




// Simulate some work
//setTimeout(() => {
//  console.log('Work completed.');
//  process.exit(0); // Exit with success code
//}, 10000);

function launchBatchFile(userInputPath) {
  const sanitizedPath = path.normalize(userInputPath); // Sanitize the path

  batch = spawn('cmd', ['/c', sanitizedPath]);

  batch.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  batch.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  batch.on('close', (code) => {
    console.log(`child process exited with code ${code}`);

    //FS.emptyDir( dest, ()=>{
    //  FS.copySync('./dist/win-unpacked/' , dest )
    //})

    console.log( "application complete "  )

  });


  console.log('Batch file launched!');
}

launchBatchFile( process.env.MQTT_BAT );


const init = async (prt) => {

    console.log("inits")

    const local = 'ws://localhost:80';
    //const local = 'wss://agent-network-8af0ee89ad26.herokuapp.com';

    const localBit = { idx: 'local', src: local };

    

    FICTIQ = require(path.resolve('./dist/100.fictiq/hunt'));
    FICTIQ_ACTION = require(path.resolve('./dist/100.fictiq/00.fictiq.unit/fictiq.action'));

    //SPACE = require(path.resolve('./002.space/index'));
    //SPACE_ACTION = require(path.resolve('./002.space/00.space.unit/space.action'));

    //PIVOT = require(path.resolve('./999.pivot/index'));
    //PIVOT_ACTION = require(path.resolve('./999.pivot/00.pivot.unit/pivot.action'));


    if ( pvt == false){

      //await PIVOT.hunt( PIVOT_ACTION.INIT_PIVOT, {  dat: MQTT, src: local });
      //await SPACE.hunt( SPACE_ACTION.INIT_SPACE, {  dat: MQTT, src: local });
      await FICTIQ.hunt( FICTIQ_ACTION.INIT_FICTIQ , { val: 1, dat: MQTT, src:  [localBit]  });

    

      //setTimeout( ()=>{

      //  process.on('exit', (code) => {
      //    console.log(`About to exit with code: ${code}`);
          
       //   batch.kill('SIGTERM');
        
       //   console.log('Cleanup tasks completed.');
       // });



      //}, 1111)

      

    }
    else{

      //await PIVOT.hunt( PIVOT_ACTION.INIT_PIVOT, { val:1, dat: MQTT, src: local });
      //await SHADE.hunt( SHADE_ACTION.INIT_SHADE , { val: 1, dat: MQTT, src:  [localBit]  });
    }


};
