import { Action } from "../99.core/interface/action.interface";
import  SettingBit  from "./fce/setting.bit";

// Setting actions

export const INIT_SETTING = "[Setting action] Init Setting";
export class InitSetting implements Action {
 readonly type = INIT_SETTING;
 constructor(public bale: SettingBit) {}
}

export const UPDATE_SETTING = "[Setting action] Update Setting";
export class UpdateSetting implements Action {
 readonly type = UPDATE_SETTING;
 constructor(public bale: SettingBit) {}
}

export const READ_SETTING = "[Read action] Read Setting";
 export class ReadSetting implements Action {
 readonly type = READ_SETTING;
 constructor(public bale: SettingBit) {}
 }
 
export const WRITE_SETTING = "[Write action] Write Setting";
 export class WriteSetting implements Action {
 readonly type = WRITE_SETTING;
 constructor(public bale: SettingBit) {}
 }
 
export const LIST_SETTING = "[List action] List Setting";
 export class ListSetting implements Action {
 readonly type = LIST_SETTING;
 constructor(public bale: SettingBit) {}
 }
 
export type Actions = | InitSetting | UpdateSetting 
| ReadSetting
| WriteSetting
| ListSetting