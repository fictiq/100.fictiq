import Model from "./99.core/interface/model.interface";

import FictiqUnit from "./00.fictiq.unit/fictiq.unit";
import KitchenUnit from "./01.kitchen.unit/kitchen.unit";
import TerminalUnit from "./80.terminal.unit/terminal.unit";
import GridUnit from "./81.grid.unit/grid.unit";
import CanvasUnit from "./82.canvas.unit/canvas.unit";
import ConsoleUnit from "./83.console.unit/console.unit";
import InputUnit from "./84.input.unit/input.unit";
import ChoiceUnit from "./85.choice.unit/choice.unit";
import ContainerUnit from "./86.container.unit/container.unit";
import GraphicUnit from "./87.graphic.unit/graphic.unit";
import HexagonUnit from "./88.hexagon.unit/hexagon.unit";
import SpriteUnit from "./89.sprite.unit/sprite.unit";
import TextUnit from "./90.text.unit/text.unit";
import DiskUnit from "./96.disk.unit/disk.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Fictiq from "./00.fictiq.unit/fce/fictiq.interface";
import { FictiqModel } from "./00.fictiq.unit/fictiq.model";
import Kitchen from "./01.kitchen.unit/fce/kitchen.interface";
import { KitchenModel } from "./01.kitchen.unit/kitchen.model";
import Terminal from "./80.terminal.unit/fce/terminal.interface";
import { TerminalModel } from "./80.terminal.unit/terminal.model";
import Grid from "./81.grid.unit/fce/grid.interface";
import { GridModel } from "./81.grid.unit/grid.model";
import Canvas from "./82.canvas.unit/fce/canvas.interface";
import { CanvasModel } from "./82.canvas.unit/canvas.model";
import Console from "./83.console.unit/fce/console.interface";
import { ConsoleModel } from "./83.console.unit/console.model";
import Input from "./84.input.unit/fce/input.interface";
import { InputModel } from "./84.input.unit/input.model";
import Choice from "./85.choice.unit/fce/choice.interface";
import { ChoiceModel } from "./85.choice.unit/choice.model";
import Container from "./86.container.unit/fce/container.interface";
import { ContainerModel } from "./86.container.unit/container.model";
import Graphic from "./87.graphic.unit/fce/graphic.interface";
import { GraphicModel } from "./87.graphic.unit/graphic.model";
import Hexagon from "./88.hexagon.unit/fce/hexagon.interface";
import { HexagonModel } from "./88.hexagon.unit/hexagon.model";
import Sprite from "./89.sprite.unit/fce/sprite.interface";
import { SpriteModel } from "./89.sprite.unit/sprite.model";
import Text from "./90.text.unit/fce/text.interface";
import { TextModel } from "./90.text.unit/text.model";
import Disk from "./96.disk.unit/fce/disk.interface";
import { DiskModel } from "./96.disk.unit/disk.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [FictiqUnit,KitchenUnit,TerminalUnit,GridUnit,CanvasUnit,ConsoleUnit,InputUnit,ChoiceUnit,ContainerUnit,GraphicUnit,HexagonUnit,SpriteUnit,TextUnit,DiskUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromFictiq from "./00.fictiq.unit/fictiq.reduce";
import * as reduceFromKitchen from "./01.kitchen.unit/kitchen.reduce";
import * as reduceFromTerminal from "./80.terminal.unit/terminal.reduce";
import * as reduceFromGrid from "./81.grid.unit/grid.reduce";
import * as reduceFromCanvas from "./82.canvas.unit/canvas.reduce";
import * as reduceFromConsole from "./83.console.unit/console.reduce";
import * as reduceFromInput from "./84.input.unit/input.reduce";
import * as reduceFromChoice from "./85.choice.unit/choice.reduce";
import * as reduceFromContainer from "./86.container.unit/container.reduce";
import * as reduceFromGraphic from "./87.graphic.unit/graphic.reduce";
import * as reduceFromHexagon from "./88.hexagon.unit/hexagon.reduce";
import * as reduceFromSprite from "./89.sprite.unit/sprite.reduce";
import * as reduceFromText from "./90.text.unit/text.reduce";
import * as reduceFromDisk from "./96.disk.unit/disk.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 fictiq : reduceFromFictiq.reducer, 
kitchen : reduceFromKitchen.reducer, 
terminal : reduceFromTerminal.reducer, 
grid : reduceFromGrid.reducer, 
canvas : reduceFromCanvas.reducer, 
console : reduceFromConsole.reducer, 
input : reduceFromInput.reducer, 
choice : reduceFromChoice.reducer, 
container : reduceFromContainer.reducer, 
graphic : reduceFromGraphic.reducer, 
hexagon : reduceFromHexagon.reducer, 
sprite : reduceFromSprite.reducer, 
text : reduceFromText.reducer, 
disk : reduceFromDisk.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 fictiq : Fictiq = new FictiqModel();
kitchen : Kitchen = new KitchenModel();
terminal : Terminal = new TerminalModel();
grid : Grid = new GridModel();
canvas : Canvas = new CanvasModel();
console : Console = new ConsoleModel();
input : Input = new InputModel();
choice : Choice = new ChoiceModel();
container : Container = new ContainerModel();
graphic : Graphic = new GraphicModel();
hexagon : Hexagon = new HexagonModel();
sprite : Sprite = new SpriteModel();
text : Text = new TextModel();
disk : Disk = new DiskModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
