import * as clone from "clone-deep";
import * as Act from "./astrokahn.action";
import { AstrokahnModel } from "./astrokahn.model";
import * as Buzz from "./astrokahn.buzzer";
import State from "../99.core/state";

export function reducer(model: AstrokahnModel = new AstrokahnModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_ASTROKAHN:
 return Buzz.updateAstrokahn(clone(model), act.bale, state);

 case Act.INIT_ASTROKAHN:
 return Buzz.initAstrokahn(clone(model), act.bale, state);

 default:
 return model;
 }
}
