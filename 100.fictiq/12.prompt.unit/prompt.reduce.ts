import * as clone from "clone-deep";
import * as Act from "./prompt.action";
import { PromptModel } from "./prompt.model";
import * as Buzz from "./prompt.buzzer";
import State from "../99.core/state";

export function reducer(model: PromptModel = new PromptModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_PROMPT:
 return Buzz.updatePrompt(clone(model), act.bale, state);

 case Act.INIT_PROMPT:
 return Buzz.initPrompt(clone(model), act.bale, state);

case Act.LIST_PROMPT:
 return Buzz.listPrompt(clone(model), act.bale, state);
 
case Act.READ_PROMPT:
 return Buzz.readPrompt(clone(model), act.bale, state);
 
case Act.WRITE_PROMPT:
 return Buzz.writePrompt(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
