import { Action } from "../99.core/interface/action.interface";
import  AuthorBit  from "./fce/author.bit";

// Author actions

export const INIT_AUTHOR = "[Author action] Init Author";
export class InitAuthor implements Action {
 readonly type = INIT_AUTHOR;
 constructor(public bale: AuthorBit) {}
}

export const UPDATE_AUTHOR = "[Author action] Update Author";
export class UpdateAuthor implements Action {
 readonly type = UPDATE_AUTHOR;
 constructor(public bale: AuthorBit) {}
}

export const READ_AUTHOR = "[Read action] Read Author";
 export class ReadAuthor implements Action {
 readonly type = READ_AUTHOR;
 constructor(public bale: AuthorBit) {}
 }
 
export const WRITE_AUTHOR = "[Write action] Write Author";
 export class WriteAuthor implements Action {
 readonly type = WRITE_AUTHOR;
 constructor(public bale: AuthorBit) {}
 }
 
export const LIST_AUTHOR = "[List action] List Author";
 export class ListAuthor implements Action {
 readonly type = LIST_AUTHOR;
 constructor(public bale: AuthorBit) {}
 }
 
export type Actions = | InitAuthor | UpdateAuthor 
| ReadAuthor
| WriteAuthor
| ListAuthor