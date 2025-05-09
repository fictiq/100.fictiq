import React from 'react'
import { useRef, useEffect, useState } from "react"
import { Title, Select, Button, Stack, Box, Text, rem } from "@mantine/core"
import "@mantine/core/styles.css"


export default function PhaseThree() {

  let sim;
  let bus
  let dex = 0

  const setBus = (obj) => {
    if (dex > 0) return
    dex += 1
    sim = obj;
    
  };

  bus = (idx, bal) => sim.hunt(idx, bal)

  return (
    <div id='surface00' style={{ width: "100%" }}  >

      <PixiBlock setBus={setBus} />

         </div>
  )
}





