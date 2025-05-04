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

export type Actions = | InitGrammer | UpdateGrammer ;
