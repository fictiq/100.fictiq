import { Action } from "../99.core/interface/action.interface";
import  PromptBit  from "./fce/prompt.bit";

// Prompt actions

export const INIT_PROMPT = "[Prompt action] Init Prompt";
export class InitPrompt implements Action {
 readonly type = INIT_PROMPT;
 constructor(public bale: PromptBit) {}
}

export const UPDATE_PROMPT = "[Prompt action] Update Prompt";
export class UpdatePrompt implements Action {
 readonly type = UPDATE_PROMPT;
 constructor(public bale: PromptBit) {}
}

export const LIST_PROMPT = "[List action] List Prompt";
 export class ListPrompt implements Action {
 readonly type = LIST_PROMPT;
 constructor(public bale: PromptBit) {}
 }
 
export const READ_PROMPT = "[Read action] Read Prompt";
 export class ReadPrompt implements Action {
 readonly type = READ_PROMPT;
 constructor(public bale: PromptBit) {}
 }
 
export const WRITE_PROMPT = "[Write action] Write Prompt";
 export class WritePrompt implements Action {
 readonly type = WRITE_PROMPT;
 constructor(public bale: PromptBit) {}
 }
 
export type Actions = | InitPrompt | UpdatePrompt 
| ListPrompt
| ReadPrompt
| WritePrompt