import * as clone from "clone-deep";
import * as Act from "./grammer.action";
import { GrammerModel } from "./grammer.model";
import * as Buzz from "./grammer.buzzer";
import State from "../99.core/state";

export function reducer(model: GrammerModel = new GrammerModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GRAMMER:
 return Buzz.updateGrammer(clone(model), act.bale, state);

 case Act.INIT_GRAMMER:
 return Buzz.initGrammer(clone(model), act.bale, state);

case Act.OPEN_GRAMMER:
 return Buzz.openGrammer(clone(model), act.bale, state);
 
case Act.WRITE_GRAMMER:
 return Buzz.writeGrammer(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
