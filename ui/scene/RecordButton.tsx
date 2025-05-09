import React from 'react'

import { Button, Box, rem } from "@mantine/core"


import * as ActSld from "../../111.solid/00.solid.unit/solid.action";
import * as ActBab from "../../111.solid/01.babylon.unit/babylon.action";


var recording = false;
var hunt 

function RecordButton(bus) {

  hunt = bus.bus
  
  
  
  
  const record = async () => {

    if (recording == false) {
      recording = true;

      hunt
      

      var bit = await hunt(ActBab.ACTION_BABYLON, { idx: "txt01", dat: { txt: 'testing gator man' } })
      return
    }


    var bit = await hunt(ActBab.CUT_BABYLON, { idx: "txt01", dat: { txt: 'testing gator man' } })
    return


    // bit = await SOLID.hunt( "[Babylon action] Record Babylon", { src: "surface00" })

  }



  return (
    <div>


      {/* Black LORA Button - positioned between header and first input */}
      <Box
        style={{
          marginBottom: rem(30),
          width: "100%",
        }}
      >
        <Button
          onClick={record}
          fullWidth
          styles={{
            root: {
              height: rem(60),
              backgroundColor: "#000000",
              color: "#FFFFFF",
              border: "3px solid black",
              borderRadius: 0,
              position: "relative",
              "&:hover": {
                backgroundColor: "#333333",
              },
            },
            label: {
              fontSize: rem(24),
              fontWeight: 700,
              fontFamily: "Courier New, monospace",
              letterSpacing: "3px",
              color: "#FFFFFF",
            },
          }}
        >
          RECORD
        </Button>
      </Box>


    </div>
  )
}

export default RecordButton
