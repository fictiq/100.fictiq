import * as ActPut from "../../84.input.unit/input.action";
import * as ActChc from "../../85.choice.unit/choice.action";
import * as ActCvs from "../../82.canvas.unit/canvas.action";
import * as ActTxt from "../../90.text.unit/text.action";
import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCns from "../../83.console.unit/console.action";

import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTrm from "../terminal.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat;

let firstLoad = false; 

export const initTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if ( firstLoad == true ) return
  firstLoad = true

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActTrm, ActChc, ActTxt, ActCvs, ActPut, ActGrd, ActCns ], dat: bal.dat, src: bal.src })

  bit = await ste.hunt( ActTrm.OPEN_TERMINAL, {} ) 

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);  
  if (bal.slv != null) bal.slv({ intBit: { idx: "init-terminal" } });

  return cpy;
};

export const updateTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  
  var lstMsg = [];
  //bit = await ste.bus(ActPvt.SHIP_PIVOT, { src: '997.terminal' })
  //lstMsg = lstMsg.concat(bit.pvtBit.lst)

  //idx = "../../333.depth/901.store/";
  //bit = await ste.bus(ActDsk.COPY_DISK, { src: './work/901.store/', idx  });
  //lstMsg = lstMsg.concat(bit.pvtBit)
       
  bal.slv({ trmBit: { idx: "update-terminal", lst:lstMsg } });
  return cpy;
  
};

export const openTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  let blessed = cpy.blessed = require('blessed')
  let contrib = cpy.contrib = require('blessed-contrib');
  let screen = cpy.screen = cpy.blessed.screen();

  
  //var grid = new contrib.grid({rows: 12, cols: 12, screen: screen})

  //bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: screen, lst: ['alligator0', 'alligator1', 'alligator2', 'alligator3', 'alligator4', 'alligator5'] })
  //bit = await ste.hunt(ActPut.OPEN_INPUT, { dat: screen })


  //cpy.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  //  return process.exit(0);
  //});

  cpy.screen.render()

  if (bal.slv != null) bal.slv({ trmBit: { idx: "open-terminal" } });


  return cpy;
};

export const closeTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  if ( cpy.screen != null ) cpy.screen.destroy()

  cpy.blessed = null
  cpy.contrib = null
  cpy.screen = null

  //cpy.term.processExit();
  if (bal.slv != null) bal.slv({ trmBit: { idx: "close-terminal" } });

  return cpy;
};

export const runTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  return cpy;
};


export const editTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  return cpy;
};



export const printTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {
  

  if (bal.slv != null) bal.slv({ trmBit: { idx: "write-terminal" } });

  return cpy;
};




export const optionTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {


  if (bal.slv != null) bal.slv({ trmBit: { idx: "option-terminal" } });

  return cpy;
};



export const inputTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  bal.slv({ trmBit: { idx: "input-terminal" } });

  return cpy;
};



export const clearTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  cpy.blessed.program().clear()

  bal.slv({ trmBit: { idx: "clear-terminal" } });

  return cpy;
};

export const layoutTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

  let bit;

  switch (bal.src) {

    case Grid.BOT_FULL_IDX:
      bit = Grid.BOT_FULL_BIT
      break

    case Grid.MID_FULL_IDX:
      bit = Grid.MID_FULL_BIT
      break

    case Grid.TOP_FULL_IDX:
      bit = Grid.TOP_FULL_BIT
      break

  }

  bal.slv({ trmBit: { idx: "layout-terminal", dat: bit } });
  return cpy;
};





var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { TerminalModel } from "../terminal.model";
import TerminalBit from "../fce/terminal.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Color from '../../val/console-color';
