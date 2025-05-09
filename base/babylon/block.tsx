import React from 'react'

import State from "../../111.solid/99.core/state";
import * as Import from "../../111.solid/BEE";

import * as ActSld from "../../111.solid/00.solid.unit/solid.action";
import * as ActBab from "../../111.solid/01.babylon.unit/babylon.action";

var once = false

export default function SolidPivot() {

    let sim = {
        hunt: (a, b) => { },
        state: null
    };

    
    sim.hunt = (typ, obj) => { return host(obj, typ) }

    var host = (obj, typ) => {

        init();

        var slv;
        const promo = new Promise((rslv, rjct) => (slv = rslv));

        if (obj == null) obj = {};
        if (obj.slv == null) obj.slv = (val0) => slv(val0);

        sim.state.dispatch({ type: typ, bale: obj });
        return promo;
    };

    var init = () => {
        if (sim.state != null) return;
        sim.state = new State();
        sim.state.pivot = sim;
        sim.state.hunt = sim.hunt
        for (var k in Import.list) new Import.list[k](sim.state);
    };

    window['SOLID'] = sim.hunt

    return (
        <>
        </>
    )


}

