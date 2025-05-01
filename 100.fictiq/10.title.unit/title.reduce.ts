import * as clone from "clone-deep";
import * as Act from "./title.action";
import { TitleModel } from "./title.model";
import * as Buzz from "./title.buzzer";
import State from "../99.core/state";

export function reducer(model: TitleModel = new TitleModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_TITLE:
 return Buzz.updateTitle(clone(model), act.bale, state);

 case Act.INIT_TITLE:
 return Buzz.initTitle(clone(model), act.bale, state);

case Act.OPEN_TITLE:
 return Buzz.openTitle(clone(model), act.bale, state);
 
case Act.READ_TITLE:
 return Buzz.readTitle(clone(model), act.bale, state);
 
case Act.WRITE_TITLE:
 return Buzz.writeTitle(clone(model), act.bale, state);
 
case Act.REMOVE_TITLE:
 return Buzz.removeTitle(clone(model), act.bale, state);
 
case Act.DELETE_TITLE:
 return Buzz.deleteTitle(clone(model), act.bale, state);
 
case Act.CREATE_TITLE:
 return Buzz.createTitle(clone(model), act.bale, state);
 
case Act.LIST_TITLE:
 return Buzz.listTitle(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
