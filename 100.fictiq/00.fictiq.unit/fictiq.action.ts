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

export type Actions = | InitFictiq | UpdateFictiq ;
