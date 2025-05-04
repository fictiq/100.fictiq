import { Action } from "../99.core/interface/action.interface";
import  GrammerBit  from "./fce/grammer.bit";

// Grammer actions

export const INIT_GRAMMER = "[Grammer action] Init Grammer";
export class InitGrammer implements Action {
 readonly type = INIT_GRAMMER;
 constructor(public bale: GrammerBit) {}
}

export const UPDATE_GRAMMER = "[Grammer action] Update Grammer";
export class UpdateGrammer implements Action {
 readonly type = UPDATE_GRAMMER;
 constructor(public bale: GrammerBit) {}
}

export const OPEN_GRAMMER = "[Open action] Open Grammer";
 export class OpenGrammer implements Action {
 readonly type = OPEN_GRAMMER;
 constructor(public bale: GrammerBit) {}
 }
 
export const WRITE_GRAMMER = "[Write action] Write Grammer";
 export class WriteGrammer implements Action {
 readonly type = WRITE_GRAMMER;
 constructor(public bale: GrammerBit) {}
 }
 
export type Actions = | InitGrammer | UpdateGrammer 
| OpenGrammer
| WriteGrammer