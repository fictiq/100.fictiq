import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

import * as ActMnu from "../menu.action";
import * as ActFtq from "../../00.fictiq.unit/fictiq.action";
import * as ActKit from "../../41.kitchen.unit/kitchen.action";
import * as ActTtl from "../../10.title.unit/title.action";

import * as ActTrm from "../../80.terminal.unit/terminal.action";
import * as ActChc from "../../85.choice.unit/choice.action";

import * as ActGrd from "../../81.grid.unit/grid.action";
import * as ActCvs from "../..//82.canvas.unit/canvas.action";
import * as ActCns from "../../83.console.unit/console.action";



import * as ActGem from "../../04.gemini.unit/gemini.action";
import * as ActGrm from "../../20.grammer.unit/grammer.action";

import * as ActPmt from "../../act/prompt.action";
import * as ActOlm from "../../act/ollama.action";


var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  //bit = await ste.hunt(ActTrm.CLEAR_TERMINAL, {})

  


  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.hunt(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 7, ySpan: 12 })
  bit = await ste.hunt(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "FICTIQ V0" })
  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })



  //open up 
  //bit = await ste.hunt(ActPmt.WRITE_PROMPT, { src: "please give me one verses of a nice beautiful greeting in iambic pentameter with no commentary", val: 1 })
  //bit = await ste.hunt(ActOlm.WRITE_OLLAMA, { src: 'committing control' })
  //lst = bit.olmBit.lst

  //var count = 0 
  //var line = []

  //lst.forEach( async (a)=>{

  //  if ( count > 10 ){

  //    var phrase = line.join(' ')
  //    bit = await ste.hunt(ActMnu.PRINT_MENU, { src: a })

  //    line = []

  //    count = 0
  //  }

  //  count +=1
  //  line.push(a)

  //})


  //bit = await ste.hunt(ActMnu.PRINT_MENU, { src: "ollama complete" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  //lst = [ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, , ActMnu.RENDER_MENU]

  lst = [ ActGem.AUTO_GEMINI,  ActFtq.OPEN_FICTIQ, ActGem.INIT_GEMINI, ActGrm.OPEN_GRAMMER, ActTtl.LIST_TITLE, ActKit.OPEN_KITCHEN, ActKit.CLOSE_KITCHEN, ActFtq.UPDATE_FICTIQ, ActFtq.BATCH_FICTIQ]

  bit = await ste.hunt(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.hunt(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActGem.INIT_GEMINI:
      bit = await ste.hunt(ActGem.INIT_GEMINI, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;


      case ActGem.AUTO_GEMINI:
        bit = await ste.hunt( ActGem.AUTO_GEMINI, {})
        bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
        break;

    case ActFtq.OPEN_FICTIQ:
      bit = await ste.hunt(ActFtq.OPEN_FICTIQ, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActFtq.UPDATE_FICTIQ:
      bit = await ste.hunt(ActFtq.UPDATE_FICTIQ, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActFtq.UPDATE_FICTIQ:
      bit = await ste.hunt(ActFtq.UPDATE_FICTIQ, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActFtq.BATCH_FICTIQ:
      bit = await ste.hunt(ActFtq.BATCH_FICTIQ, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActGrm.OPEN_GRAMMER:
      bit = await ste.hunt(ActGrm.OPEN_GRAMMER, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActKit.OPEN_KITCHEN:
      bit = await ste.hunt(ActKit.OPEN_KITCHEN, { idx: '100.fictiq' })
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActKit.CLOSE_KITCHEN:
      bit = await ste.hunt(ActKit.CLOSE_KITCHEN, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;

    case ActTtl.LIST_TITLE:
      bit = await ste.hunt(ActTtl.LIST_TITLE, {})
      bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: JSON.stringify(bit) })
      break;



    default:
      bit = await ste.hunt(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  bit = await ste.hunt(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src })

  updateMenu(cpy, bal, ste);

  //var lst = [ ActPvt.CLOUD_PIVOT, ActPvt.UPDATE_PIVOT, ActPvt.OPEN_PIVOT, ActPvt.EDIT_PIVOT, ActSpc.MERGE_SPACE, ActMnu.FOCUS_MENU, ActMnu.HEXMAP_MENU, ActMnu.YIELD_MENU, ActMnu.RENDER_MENU]
  //lst.push(ActFoc.MODEL_FOCUS)

  //bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst })

  // bit = bit.trmBit;
  // var idx = lst[bit.val];


  //updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.hunt(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  lst = itm.split(",");
  lst.forEach((a) => ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  //ste.hunt(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });

