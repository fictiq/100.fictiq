import * as clone from "clone-deep";
import * as Act from "./kitchen.action";
import { KitchenModel } from "./kitchen.model";
import * as Buzz from "./kitchen.buzzer";
import State from "../99.core/state";

export function reducer(model: KitchenModel = new KitchenModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_KITCHEN:
            return Buzz.updateKitchen(clone(model), act.bale, state);

        case Act.INIT_KITCHEN:
            return Buzz.initKitchen(clone(model), act.bale, state);

        case Act.OPEN_KITCHEN:
            return Buzz.openKitchen(clone(model), act.bale, state);

        case Act.CLOSE_KITCHEN:
            return Buzz.closeKitchen(clone(model), act.bale, state);

        default:
            return model;
    }
}
