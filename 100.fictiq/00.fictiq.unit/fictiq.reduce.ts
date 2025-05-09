import * as clone from "clone-deep";
import * as Act from "./fictiq.action";
import { FictiqModel } from "./fictiq.model";
import * as Buzz from "./fictiq.buzzer";
import State from "../99.core/state";

export function reducer(model: FictiqModel = new FictiqModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_FICTIQ:
 return Buzz.updateFictiq(clone(model), act.bale, state);

 case Act.INIT_FICTIQ:
 return Buzz.initFictiq(clone(model), act.bale, state);

 case Act.BATCH_FICTIQ:
 return Buzz.batchFictiq(clone(model), act.bale, state);

case Act.OPEN_FICTIQ:
 return Buzz.openFictiq(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
