import * as ActDsk from "../../96.disk.unit/disk.action";

var bit, lst, idx, val, dat, src;

export const initDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {
  cpy.local = bal.val;

  lst = [ActDsk.UPDATE_DISK, ActDsk.WRITE_DISK, ActDsk.READ_DISK];

  if (bal.slv != null) bal.slv({ intBit: { idx: "init-disk", lst } });

  return cpy;
};




export const updateDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  bit = await ste.hunt(ActDsk.READ_DISK, { src: bal.src })

  bit = bit.dskBit;
  lst = bit.lst
  lst.push(bal.dat)

  bit = await ste.hunt(ActDsk.WRITE_DISK, { src: bal.src, dat: lst.join('\n') })

  if (bal.slv != null) bal.slv({ dskBit: { idx: "update-disk", src: bal.src } });
  return cpy;
};

export const writeDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {


  if (bal.val == null) bal.val = 0

  if (bal.idx != null) bal.src = bal.idx;

  if (bal.src == null) {
    if (bal.slv != null) return bal.slv({ dskBit: { idx: "write-disk-error", src: "no source" } });
  }

  if (bal.dat == null) {
    if (bal.slv != null) return bal.slv({ dskBit: { idx: "write-disk-error", src: "no data" } });
  }

  FS.ensureFileSync(bal.src)


  //if (bal.idx == 'debug') {
  //console.log("............")
  //console.log("writing..." + bal.src)
  //console.log("............")
  //}


  bal


  //these streets are like an algorithm

  if (bal.val == 1) bit = await FS.writeJson(bal.src, bal.dat)
  else bit = await FS.writeFile(bal.src, bal.dat)

  bit

  setTimeout(() => {
    if (bal.slv != null) bal.slv({ dskBit: { idx: "write-disk", src: bal.src } });
  }, 3)

  return cpy;
};

export const readDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  if (bal.val == null) bal.val = 0
  FS.ensureFileSync(bal.src)

  if (bal.val == 1) dat = FS.readJsonSync(bal.src)
  else dat = FS.readFileSync(bal.src).toString()

  lst = []

  dat

  if (dat.split != null) {

    lst = dat.split('\n')

    //console.log("............")
    //console.log("reading..." + bal.src)
    //console.log("............")
  }

  if (bal.slv != null) bal.slv({ dskBit: { idx: "read-disk", src: bal.src, dat, lst } });

  return cpy;

};


export const indexDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {



  if ((bal.src == null) && (bal.slv != null)) bal.slv({ dskBit: { idx: "list-disk-error", src: 'no src present' } });
  if (bal.val == null) bal.val = 1;

  lst = await FS.readdir(bal.src)

  if (bal.slv != null) bal.slv({ dskBit: { idx: "index-disk", src: bal.src, lst } });

  return cpy;
};


export const load_listDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  bit = await ste.hunt(ActDsk.INDEX_DISK, { src: bal.src })

  lst = bit.dskBit.lst;
  lst.forEach((a, b) => {
    lst[b] = bal.src + a
  })

  var out = []
  lst.forEach(async (a, b) => {
    bit = await ste.hunt(ActDsk.READ_DISK, { src: a })
    out.push({ src: a, dat: bit.dskBit.dat })
  })


  if (bal.slv != null) bal.slv({ dskBit: { idx: "load-list-disk", src: bal.src, lst: out } });

  return cpy;
};


//src is where it comes from ; idx is where it is going
export const copyDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  lst = []


  if (bal.src == null) {
    if (bal.slv != null) return bal.slv({ dskBit: { idx: "write-directory-disk-error", src: "no source" } });
  }

  if (bal.idx == null) {
    if (bal.slv != null) return bal.slv({ dskBit: { idx: "write-directory-disk-error", src: "no target" } });
  }


  if (FS.lstatSync(bal.src).isDirectory() == false) {
    // Do something
    if (bal.slv != null) return bal.slv({ dskBit: { idx: "write-directory-disk-error", src: "no directory" } });
    return
  }


  FS.ensureDirSync(bal.src)
  FS.ensureDirSync(bal.idx)

  if (bal.val == null) bal.val = 0

  if (bal.val == 0) {
    bit = await FS.remove(bal.idx)
  }


  if (bal.dat == 'debug') {

    lst.push("............")
    lst.push("copying..." + bal.src)
    lst.push("............")

  }

  //these streets are like an algorithm
  //and this should have been the other way

  bit = await FS.copy(bal.src, bal.idx)

  setTimeout(() => {
    if (bal.slv != null) bal.slv({ dskBit: { idx: "copy-disk", src: bal.src, dat: bal.idx, lst } });
  }, 33)

  return cpy;
};


export const frameDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  var dat = bal.dat


  var dataUrlRegExp = /^data:image\/\w+;base64,/;
  // remove the "header" of the data URL via the regexp
  var base64Data = dat.replace(dataUrlRegExp, "");
  // declare a binary buffer to hold decoded base64 data
  var imageBuffer = Buffer.from(base64Data, "base64");

  FS.ensureDirSync(bal.src)

  var list = FS.readdirSync(bal.src)
  var dex = String(list.length).padStart(5, "0")

  var fin = bal.src + dex + '.png'
  var bit = await FS.writeFile(fin, imageBuffer)

  if (bal.slv != null) bal.slv({ dskBit: { idx: "frame-disk", src: bal.src, dat: dex } });

  console.log("writing filepath " + fin)


  return cpy;
};


export const batchDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {

  var child_process = require('child_process');
  var spawn = child_process.spawn;

  //var bat = require.resolve(bal.src);
  var ls = spawn(bal.src);

  ls.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });

  ls.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });

  ls.on('exit', function (code) {
    console.log('batch disk process exited with code ' + code);
    if (bal.slv != null) bal.slv({ dskBit: { idx: "batch-disk", src: bal.src } });

  });

  return cpy;
};


export const trashDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  var loc = bal.idx + '/' + bal.src;

  bit = await FS.ensureDir(loc)
  bit = await FS.emptyDir(loc)

  if (bal.slv != null) bal.slv({ dskBit: { idx: "trash-disk", src: loc } });

  return cpy;
};



export const ensureDisk = async (cpy: DiskModel, bal: DiskBit, ste: State) => {

  bit = await FS.ensureDir(bal.src)

  if (bal.slv != null) bal.slv({ dskBit: { idx: "ensure-disk", src: bal.src } });

  return cpy;
};



export const deleteDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {

  lst = []

  if (bal.idx != null) bal.src = bal.idx;

  bit = FS.remove(bal.src, err => {
    if (err) return console.error(err)
    lst.push('deleting ! ' + bal.src)

    if (bal.slv != null) bal.slv({ dskBit: { idx: "delete-disk", src: bal.src, lst } });

  })

  return cpy;
};



export const existDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {

  let fileExists = FS.existsSync(bal.src);

  if (bal.slv != null) bal.slv({ dskBit: { idx: "exist-disk", src: fileExists } });

  return cpy;
};



export const swatchDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {

  if (bal.src == null) bal.src = './data/swatch.png'
  if (bal.idx == null) bal.idx = 'FF00FF';

  var PNG = require("pngjs").PNG;
  var convert = require('color-convert');

  var rgb = convert.hex.rgb(bal.idx);

  FS.ensureFileSync(bal.src)

  let newfile = new PNG({ width: 128, height: 128 });

  for (let y = 0; y < newfile.height; y++) {
    for (let x = 0; x < newfile.width; x++) {
      let idx = (newfile.width * y + x) << 2;

      newfile.data[idx] = rgb[0];
      newfile.data[idx + 1] = rgb[1];
      newfile.data[idx + 2] = rgb[2];
      newfile.data[idx + 3] = 0xff;
    }
  }

  newfile
    .pack()
    .pipe(FS.createWriteStream(bal.src))
    .on("finish", function () {
      console.log("Written! " + bal.src);
      if (bal.slv != null) bal.slv({ dskBit: { idx: "swatch-disk", src: bal.src } });
    });


  return cpy;
};


export const colorDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {

  var PNG = require("pngjs").PNG;
  var convert = require('color-convert');

  var r, g, b;
  var hex;

  bal.src

  FS.createReadStream(bal.src)
    .pipe(
      new PNG({
        filterType: 4,
      })
    )
    .on("parsed", function () {
      for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
          var idx = (this.width * y + x) << 2;

          // invert color
          r = this.data[idx];
          g = this.data[idx + 1];
          b = this.data[idx + 2];

          hex = convert.rgb.hex([r, g, b]);
          //maybe turn this more into a dominate color 

          // and reduce opacity
          //this.data[idx + 3] = this.data[idx + 3] >> 1;
        }
      }

      dat = { r, g, b, hex }

      if (bal.slv != null) bal.slv({ dskBit: { idx: "color-disk", dat } });

      //this.pack().pipe(fs.createWriteStream("out.png"));
    });



  return cpy;
};


export const typeDisk = (cpy: DiskModel, bal: DiskBit, ste: State) => {

  if (bal.src != null) bal.idx = bal.src;

  var flag = FS.lstatSync(bal.idx).isDirectory()
  src = 'file'
  if (flag == true) src = 'directory'
  bal.slv({ dskBit: { idx: "type-disk", src } });

  return cpy;
};



import { DiskModel } from "../disk.model";
import DiskBit from "../fce/disk.bit";
import State from "../../99.core/state";
import * as FS from 'fs-extra'
/*



//we need a promise
var loc = "http://localhost:7001/openBeauty/";

(async () => {
  const rawResponse = await fetch(loc, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ src }),
  });
  const content = await rawResponse.json();

  console.log(content);
})();

*/
