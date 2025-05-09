import * as clone from "clone-deep";
import * as Act from "./setting.action";
import { SettingModel } from "./setting.model";
import * as Buzz from "./setting.buzzer";
import State from "../99.core/state";

export function reducer(model: SettingModel = new SettingModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SETTING:
 return Buzz.updateSetting(clone(model), act.bale, state);

 case Act.INIT_SETTING:
 return Buzz.initSetting(clone(model), act.bale, state);

case Act.READ_SETTING:
 return Buzz.readSetting(clone(model), act.bale, state);
 
case Act.WRITE_SETTING:
 return Buzz.writeSetting(clone(model), act.bale, state);
 
case Act.LIST_SETTING:
 return Buzz.listSetting(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
