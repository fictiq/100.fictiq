import { Action } from "../99.core/interface/action.interface";
import  FictiqBit  from "./fce/fictiq.bit";

// Fictiq actions

export const INIT_FICTIQ = "[Fictiq action] Init Fictiq";
export class InitFictiq implements Action {
 readonly type = INIT_FICTIQ;
 constructor(public bale: FictiqBit) {}
}

export const UPDATE_FICTIQ = "[Fictiq action] Update Fictiq";
export class UpdateFictiq implements Action {
 readonly type = UPDATE_FICTIQ;
 constructor(public bale: FictiqBit) {}
}

export const BATCH_FICTIQ = "[Fictiq action] Batch Fictiq";
export class BatchFictiq implements Action {
 readonly type = BATCH_FICTIQ;
 constructor(public bale: FictiqBit) {}
}

export const OPEN_FICTIQ = "[Open action] Open Fictiq";
 export class OpenFictiq implements Action {
 readonly type = OPEN_FICTIQ;
 constructor(public bale: FictiqBit) {}
 }
 
export type Actions = | InitFictiq | UpdateFictiq | BatchFictiq 
| OpenFictiq