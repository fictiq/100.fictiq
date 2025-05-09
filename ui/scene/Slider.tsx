
import React from 'react'

import { useState, useCallback } from 'react';
import { Button, Text, Box } from '@mantine/core';

import { useEventListener } from '@mantine/hooks';

import * as ActMku from "../../111.solid/10.miku.unit/miku.action";

var hunt, bit

function HorizontalSlider(bus) {

    hunt = window['SOLID']

    const [value, setValue] = useState(0);
    const [endValue, setEndValue] = useState(50);

    const increment = useCallback(() => setValue(async (c) => {
        c+=1
        hunt(ActMku.WRITE_MIKU, { idx: "mku00", dat: { position: { z: c } } })
    }),
        []);
    const ref = useEventListener('click', increment);

    return (
        <Box maw={400} mx="auto">
            <Button fullWidth ref={ref}>UP</Button>
        </Box>
    );
}

export default HorizontalSlider
