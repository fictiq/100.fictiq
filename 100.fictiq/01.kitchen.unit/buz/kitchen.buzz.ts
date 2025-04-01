export const initKitchen = (cpy: KitchenModel, bal:KitchenBit, ste: State) => {
 
    bal.slv({ intBit: { idx: "init-kitchen" } });

 return cpy;
};

export const openKitchen = (cpy: KitchenModel, bal:KitchenBit, ste: State) => {
    
    
    bal.slv({ intBit: { idx: "open-kitchen" } });

    return cpy;
   };

export const updateKitchen = (cpy: KitchenModel, bal:KitchenBit, ste: State) => {
 return cpy;
};


import { KitchenModel } from "../kitchen.model";
import KitchenBit from "../fce/kitchen.bit";
import State from "../../99.core/state";