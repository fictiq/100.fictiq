var fs = require("fs-extra");
var test = require("ava");
require("../../001.time/000.quest.time.js");
const MQTT = require("async-mqtt");

var init = async () => {

  const aedes = require("aedes")();
  const server = require("net").createServer(aedes.handle);
  const port = 1883;

  server.listen(port, function () {
    console.log("server started and listening on port ", port);
    open()
  });

};

var bit, src, lst, idx, val;


var open = () => {

  var ActTme = require("../../dist/001.time/00.time.unit/time.action.js");

  test("init time", async (t) => {
    bit = await TIME.hunt(ActTme.INIT_TIME, { dat: MQTT })
    t.true(bit.intBit != null);
    bit = bit.intBit;
    t.deepEqual(bit.idx, "init-time");
  });


  test("write/read/update time one", async (t) => {
    bit = await TIME.hunt(ActTme.WRITE_TIME, {});
    t.true(bit.tmeBit != null);
    var tmeBit = bit.tmeBit;

    t.deepEqual(tmeBit.idx, "write-time");
    t.deepEqual(tmeBit.dat.idx, "tme00");
    t.deepEqual(tmeBit.dat.src, "03-03-3210, 03:03:03 AM");

    bit = await TIME.hunt(ActTme.READ_TIME, {});
    t.true(bit.tmeBit != null);
    var tmeBit = bit.tmeBit;

    t.deepEqual(tmeBit.idx, "read-time");
    t.deepEqual(tmeBit.dat.idx, "tme00");
    t.deepEqual(tmeBit.dat.src, "03-03-3210, 03:03:03 AM");

    bit = await TIME.hunt(ActTme.UPDATE_TIME, { dat: { sec: 3 } })
    t.true(bit.tmeBit != null);
    var tmeBit = bit.tmeBit;
    t.deepEqual(tmeBit.idx, "update-time");
    t.deepEqual(tmeBit.dat.idx, "tme00");
    t.deepEqual(tmeBit.dat.src, "03-03-3210, 03:03:06 AM");

  });

  test("write/read time two", async (t) => {
    bit = await TIME.hunt(ActTme.WRITE_TIME, { idx: "tme01", dat: { yrs: 1996 } })
    t.true(bit.tmeBit != null);
    var tmeBit = bit.tmeBit;

    t.deepEqual(tmeBit.idx, "write-time");
    t.deepEqual(tmeBit.dat.idx, "tme01");
    t.deepEqual(tmeBit.dat.src, "03-03-1996, 03:03:03 AM");

    console.log('---------')

    bit = await TIME.hunt(ActTme.READ_TIME, { idx: "tme01" })
    t.true(bit.tmeBit != null);
    var tmeBit = bit.tmeBit; var tmeBit = bit.tmeBit;
    t.deepEqual(tmeBit.idx, "read-time");
    t.deepEqual(tmeBit.dat.idx, "tme01");
    t.deepEqual(tmeBit.dat.src, "03-03-1996, 03:03:03 AM");

    bit = await TIME.hunt(ActTme.UPDATE_TIME, { idx: "tme01", dat: { sec: 3 } })
    t.true(bit.tmeBit != null);
    var tmeBit = bit.tmeBit;
    t.deepEqual(tmeBit.idx, "update-time");
    t.deepEqual(tmeBit.dat.idx, "tme01");
    t.deepEqual(tmeBit.dat.src, "03-03-1996, 03:03:06 AM");

  });

  //test("read time two", async (t) => {

  //  var tmeBit = bit.tmeBit;

  //  t.deepEqual(tmeBit.idx, "read-time");
  //  t.deepEqual(tmeBit.dat.idx, "tme01");
  //  t.deepEqual(tmeBit.dat.src, "03-03-1996, 03:03:03 AM");
  //});



  // test("read time one", async (t) => {
  //   // });

}


init()



//test("now time", async (t) => {
//  var bit = await TIME.nowTime();
//  bit = bit.tmeBit;
//  t.deepEqual(bit.idx, "now-time");
//});



//test("update clock", async (t) => {
//  var bit = await TIME.updateClock({ sec: 3, dat: { idx: "clk00" } });
//  var clkBit = bit.clkBit;

//  t.deepEqual(clkBit.idx, "update-clock");
//  t.deepEqual(clkBit.dat.src, "03-03-3210, 03:03:06 AM");

//  var bit = await TIME.updateClock({ sec: 3, dat: { idx: "clk00" } });
//  var clkBit = bit.clkBit;

//  t.deepEqual(clkBit.idx, "update-clock");
//  t.deepEqual(clkBit.dat.src, "03-03-3210, 03:03:09 AM");
//});
