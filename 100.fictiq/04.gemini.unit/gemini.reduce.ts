import * as clone from "clone-deep";
import * as Act from "./gemini.action";
import { GeminiModel } from "./gemini.model";
import * as Buzz from "./gemini.buzzer";
import State from "../99.core/state";

export function reducer(model: GeminiModel = new GeminiModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GEMINI:
 return Buzz.updateGemini(clone(model), act.bale, state);

 case Act.INIT_GEMINI:
 return Buzz.initGemini(clone(model), act.bale, state);

case Act.AUTO_GEMINI:
 return Buzz.autoGemini(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
