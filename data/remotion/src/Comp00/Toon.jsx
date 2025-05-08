import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";

export function Toon() {
  function pad(num, size) {
    return String(num).padStart(size, "0");
  }

  const frame = useCurrentFrame();

  var max = 120
  
  const imageIndex = Math.floor(frame % max);

  const now = pad(frame, 5);

  return (
    <div>
      <Img src={staticFile(`/test000/Head rig.${now}.png`)} />
    </div>
  );
}
