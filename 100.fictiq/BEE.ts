import Model from "./99.core/interface/model.interface";

import FictiqUnit from "./00.fictiq.unit/fictiq.unit";
import AstrokahnUnit from "./01.astrokahn.unit/astrokahn.unit";
import OllamaUnit from "./03.ollama.unit/ollama.unit";
import GeminiUnit from "./04.gemini.unit/gemini.unit";
import TitleUnit from "./10.title.unit/title.unit";
import PromptUnit from "./12.prompt.unit/prompt.unit";
import AuthorUnit from "./13.author.unit/author.unit";
import GenreUnit from "./14.genre.unit/genre.unit";
import SettingUnit from "./15.setting.unit/setting.unit";
import GrammerUnit from "./20.grammer.unit/grammer.unit";
import KitchenUnit from "./41.kitchen.unit/kitchen.unit";
import DiffusionUnit from "./42.diffusion.unit/diffusion.unit";
import RemotionUnit from "./50.remotion.unit/remotion.unit";
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
import Astrokahn from "./01.astrokahn.unit/fce/astrokahn.interface";
import { AstrokahnModel } from "./01.astrokahn.unit/astrokahn.model";
import Ollama from "./03.ollama.unit/fce/ollama.interface";
import { OllamaModel } from "./03.ollama.unit/ollama.model";
import Gemini from "./04.gemini.unit/fce/gemini.interface";
import { GeminiModel } from "./04.gemini.unit/gemini.model";
import Title from "./10.title.unit/fce/title.interface";
import { TitleModel } from "./10.title.unit/title.model";
import Prompt from "./12.prompt.unit/fce/prompt.interface";
import { PromptModel } from "./12.prompt.unit/prompt.model";
import Author from "./13.author.unit/fce/author.interface";
import { AuthorModel } from "./13.author.unit/author.model";
import Genre from "./14.genre.unit/fce/genre.interface";
import { GenreModel } from "./14.genre.unit/genre.model";
import Setting from "./15.setting.unit/fce/setting.interface";
import { SettingModel } from "./15.setting.unit/setting.model";
import Grammer from "./20.grammer.unit/fce/grammer.interface";
import { GrammerModel } from "./20.grammer.unit/grammer.model";
import Kitchen from "./41.kitchen.unit/fce/kitchen.interface";
import { KitchenModel } from "./41.kitchen.unit/kitchen.model";
import Diffusion from "./42.diffusion.unit/fce/diffusion.interface";
import { DiffusionModel } from "./42.diffusion.unit/diffusion.model";
import Remotion from "./50.remotion.unit/fce/remotion.interface";
import { RemotionModel } from "./50.remotion.unit/remotion.model";
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


export const list: Array<any> = [FictiqUnit,AstrokahnUnit,OllamaUnit,GeminiUnit,TitleUnit,PromptUnit,AuthorUnit,GenreUnit,SettingUnit,GrammerUnit,KitchenUnit,DiffusionUnit,RemotionUnit,TerminalUnit,GridUnit,CanvasUnit,ConsoleUnit,InputUnit,ChoiceUnit,ContainerUnit,GraphicUnit,HexagonUnit,SpriteUnit,TextUnit,DiskUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromFictiq from "./00.fictiq.unit/fictiq.reduce";
import * as reduceFromAstrokahn from "./01.astrokahn.unit/astrokahn.reduce";
import * as reduceFromOllama from "./03.ollama.unit/ollama.reduce";
import * as reduceFromGemini from "./04.gemini.unit/gemini.reduce";
import * as reduceFromTitle from "./10.title.unit/title.reduce";
import * as reduceFromPrompt from "./12.prompt.unit/prompt.reduce";
import * as reduceFromAuthor from "./13.author.unit/author.reduce";
import * as reduceFromGenre from "./14.genre.unit/genre.reduce";
import * as reduceFromSetting from "./15.setting.unit/setting.reduce";
import * as reduceFromGrammer from "./20.grammer.unit/grammer.reduce";
import * as reduceFromKitchen from "./41.kitchen.unit/kitchen.reduce";
import * as reduceFromDiffusion from "./42.diffusion.unit/diffusion.reduce";
import * as reduceFromRemotion from "./50.remotion.unit/remotion.reduce";
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
astrokahn : reduceFromAstrokahn.reducer, 
ollama : reduceFromOllama.reducer, 
gemini : reduceFromGemini.reducer, 
title : reduceFromTitle.reducer, 
prompt : reduceFromPrompt.reducer, 
author : reduceFromAuthor.reducer, 
genre : reduceFromGenre.reducer, 
setting : reduceFromSetting.reducer, 
grammer : reduceFromGrammer.reducer, 
kitchen : reduceFromKitchen.reducer, 
diffusion : reduceFromDiffusion.reducer, 
remotion : reduceFromRemotion.reducer, 
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
astrokahn : Astrokahn = new AstrokahnModel();
ollama : Ollama = new OllamaModel();
gemini : Gemini = new GeminiModel();
title : Title = new TitleModel();
prompt : Prompt = new PromptModel();
author : Author = new AuthorModel();
genre : Genre = new GenreModel();
setting : Setting = new SettingModel();
grammer : Grammer = new GrammerModel();
kitchen : Kitchen = new KitchenModel();
diffusion : Diffusion = new DiffusionModel();
remotion : Remotion = new RemotionModel();
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
