import * as clone from "clone-deep";
import * as Act from "./author.action";
import { AuthorModel } from "./author.model";
import * as Buzz from "./author.buzzer";
import State from "../99.core/state";

export function reducer(model: AuthorModel = new AuthorModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_AUTHOR:
 return Buzz.updateAuthor(clone(model), act.bale, state);

 case Act.INIT_AUTHOR:
 return Buzz.initAuthor(clone(model), act.bale, state);

case Act.READ_AUTHOR:
 return Buzz.readAuthor(clone(model), act.bale, state);
 
case Act.WRITE_AUTHOR:
 return Buzz.writeAuthor(clone(model), act.bale, state);
 
case Act.LIST_AUTHOR:
 return Buzz.listAuthor(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
