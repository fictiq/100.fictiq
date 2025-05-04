import * as clone from "clone-deep";
import * as Act from "./genre.action";
import { GenreModel } from "./genre.model";
import * as Buzz from "./genre.buzzer";
import State from "../99.core/state";

export function reducer(model: GenreModel = new GenreModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GENRE:
 return Buzz.updateGenre(clone(model), act.bale, state);

 case Act.INIT_GENRE:
 return Buzz.initGenre(clone(model), act.bale, state);

case Act.READ_GENRE:
 return Buzz.readGenre(clone(model), act.bale, state);
 
case Act.WRITE_GENRE:
 return Buzz.writeGenre(clone(model), act.bale, state);
 
case Act.LIST_GENRE:
 return Buzz.listGenre(clone(model), act.bale, state);
 
case Act.SUB_GENRE:
 return Buzz.subGenre(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
