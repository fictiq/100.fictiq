import { Action } from "../99.core/interface/action.interface";
import  GenreBit  from "./fce/genre.bit";

// Genre actions

export const INIT_GENRE = "[Genre action] Init Genre";
export class InitGenre implements Action {
 readonly type = INIT_GENRE;
 constructor(public bale: GenreBit) {}
}

export const UPDATE_GENRE = "[Genre action] Update Genre";
export class UpdateGenre implements Action {
 readonly type = UPDATE_GENRE;
 constructor(public bale: GenreBit) {}
}

export const READ_GENRE = "[Read action] Read Genre";
 export class ReadGenre implements Action {
 readonly type = READ_GENRE;
 constructor(public bale: GenreBit) {}
 }
 
export const WRITE_GENRE = "[Write action] Write Genre";
 export class WriteGenre implements Action {
 readonly type = WRITE_GENRE;
 constructor(public bale: GenreBit) {}
 }
 
export const LIST_GENRE = "[List action] List Genre";
 export class ListGenre implements Action {
 readonly type = LIST_GENRE;
 constructor(public bale: GenreBit) {}
 }
 
export const SUB_GENRE = "[Sub action] Sub Genre";
 export class SubGenre implements Action {
 readonly type = SUB_GENRE;
 constructor(public bale: GenreBit) {}
 }
 
export type Actions = | InitGenre | UpdateGenre 
| ReadGenre
| WriteGenre
| ListGenre
| SubGenre