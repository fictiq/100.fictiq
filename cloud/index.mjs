export default {
  async fetch(request, env) {
    return await handleRequest(request, env);
  },
};

async function handleRequest(request, env) {
  let id = env.DAT_SPACE.idFromName("A");
  let obj = env.DAT_SPACE.get(id);
  let resp = await obj.fetch(request);
  let data = await resp.json();
  return new Response(JSON.stringify(data));
}

export class DatSpace {
  constructor(state, env) {
    this.state = state;
  }

  async fetch(request) {
    
    require("./002.space.js");
    var ActSpc = require("../dist/002.space/00.space.unit/space.action");

    let url = new URL(request.url);
    var name = url.searchParams.get("name");

    let value = { idx: "dat-space-init" };
    var bit;

    switch (url.pathname) {
      case "/testSpace":
        bit = await globalThis.SPACE.hunt( ActSpc.TEST_SPACE, {});
        value = bit;
        break;

      case "/":
        break;
      default:
        return new Response("Not found", { status: 404 });
    }

    value = JSON.stringify(value);

    //bawait this.state.storage.put("value", value);

    return new Response(value);
  }
}
