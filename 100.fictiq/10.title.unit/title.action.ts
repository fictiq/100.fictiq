import { Action } from "../99.core/interface/action.interface";
import  TitleBit  from "./fce/title.bit";

// Title actions

export const INIT_TITLE = "[Title action] Init Title";
export class InitTitle implements Action {
 readonly type = INIT_TITLE;
 constructor(public bale: TitleBit) {}
}

export const UPDATE_TITLE = "[Title action] Update Title";
export class UpdateTitle implements Action {
 readonly type = UPDATE_TITLE;
 constructor(public bale: TitleBit) {}
}

export const OPEN_TITLE = "[Open action] Open Title";
 export class OpenTitle implements Action {
 readonly type = OPEN_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const READ_TITLE = "[Read action] Read Title";
 export class ReadTitle implements Action {
 readonly type = READ_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const WRITE_TITLE = "[Write action] Write Title";
 export class WriteTitle implements Action {
 readonly type = WRITE_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const REMOVE_TITLE = "[Remove action] Remove Title";
 export class RemoveTitle implements Action {
 readonly type = REMOVE_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const DELETE_TITLE = "[Delete action] Delete Title";
 export class DeleteTitle implements Action {
 readonly type = DELETE_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const CREATE_TITLE = "[Create action] Create Title";
 export class CreateTitle implements Action {
 readonly type = CREATE_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export const LIST_TITLE = "[List action] List Title";
 export class ListTitle implements Action {
 readonly type = LIST_TITLE;
 constructor(public bale: TitleBit) {}
 }
 
export type Actions = | InitTitle | UpdateTitle 
| OpenTitle
| ReadTitle
| WriteTitle
| RemoveTitle
| DeleteTitle
| CreateTitle
| ListTitle