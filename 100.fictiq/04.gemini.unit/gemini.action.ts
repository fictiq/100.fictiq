import { Action } from "../99.core/interface/action.interface";
import  GeminiBit  from "./fce/gemini.bit";

// Gemini actions

export const INIT_GEMINI = "[Gemini action] Init Gemini";
export class InitGemini implements Action {
 readonly type = INIT_GEMINI;
 constructor(public bale: GeminiBit) {}
}

export const UPDATE_GEMINI = "[Gemini action] Update Gemini";
export class UpdateGemini implements Action {
 readonly type = UPDATE_GEMINI;
 constructor(public bale: GeminiBit) {}
}

export const AUTO_GEMINI = "[Auto action] Auto Gemini";
 export class AutoGemini implements Action {
 readonly type = AUTO_GEMINI;
 constructor(public bale: GeminiBit) {}
 }
 
export type Actions = | InitGemini | UpdateGemini 
| AutoGemini