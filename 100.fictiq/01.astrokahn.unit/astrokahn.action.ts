import { Action } from "../99.core/interface/action.interface";
import  AstrokahnBit  from "./fce/astrokahn.bit";

// Astrokahn actions

export const INIT_ASTROKAHN = "[Astrokahn action] Init Astrokahn";
export class InitAstrokahn implements Action {
 readonly type = INIT_ASTROKAHN;
 constructor(public bale: AstrokahnBit) {}
}

export const UPDATE_ASTROKAHN = "[Astrokahn action] Update Astrokahn";
export class UpdateAstrokahn implements Action {
 readonly type = UPDATE_ASTROKAHN;
 constructor(public bale: AstrokahnBit) {}
}

export type Actions = | InitAstrokahn | UpdateAstrokahn ;
