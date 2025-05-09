import { Action } from "../99.core/interface/action.interface";
import  RemotionBit  from "./fce/remotion.bit";

// Remotion actions

export const INIT_REMOTION = "[Remotion action] Init Remotion";
export class InitRemotion implements Action {
 readonly type = INIT_REMOTION;
 constructor(public bale: RemotionBit) {}
}

export const UPDATE_REMOTION = "[Remotion action] Update Remotion";
export class UpdateRemotion implements Action {
 readonly type = UPDATE_REMOTION;
 constructor(public bale: RemotionBit) {}
}

export const READ_REMOTION = "[Read action] Read Remotion";
 export class ReadRemotion implements Action {
 readonly type = READ_REMOTION;
 constructor(public bale: RemotionBit) {}
 }
 
export const WRITE_REMOTION = "[Write action] Write Remotion";
 export class WriteRemotion implements Action {
 readonly type = WRITE_REMOTION;
 constructor(public bale: RemotionBit) {}
 }
 
export const REMOVE_REMOTION = "[Remove action] Remove Remotion";
 export class RemoveRemotion implements Action {
 readonly type = REMOVE_REMOTION;
 constructor(public bale: RemotionBit) {}
 }
 
export const DELETE_REMOTION = "[Delete action] Delete Remotion";
 export class DeleteRemotion implements Action {
 readonly type = DELETE_REMOTION;
 constructor(public bale: RemotionBit) {}
 }
 
export const CREATE_REMOTION = "[Create action] Create Remotion";
 export class CreateRemotion implements Action {
 readonly type = CREATE_REMOTION;
 constructor(public bale: RemotionBit) {}
 }
 
export type Actions = | InitRemotion | UpdateRemotion 
| ReadRemotion
| WriteRemotion
| RemoveRemotion
| DeleteRemotion
| CreateRemotion