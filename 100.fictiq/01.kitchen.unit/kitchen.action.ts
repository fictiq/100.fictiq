import { Action } from "../99.core/interface/action.interface";
import  KitchenBit  from "./fce/kitchen.bit";

// Kitchen actions

export const INIT_KITCHEN = "[Kitchen action] Init Kitchen";
export class InitKitchen implements Action {
 readonly type = INIT_KITCHEN;
 constructor(public bale: KitchenBit) {}
}

export const UPDATE_KITCHEN = "[Kitchen action] Update Kitchen";
export class UpdateKitchen implements Action {
 readonly type = UPDATE_KITCHEN;
 constructor(public bale: KitchenBit) {}
}

export type Actions = | InitKitchen | UpdateKitchen ;
