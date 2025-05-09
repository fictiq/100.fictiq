import React from 'react';
import { Box, ScrollArea } from '@mantine/core';

import { useState, useEffect } from 'react';

import Scene from './Scene'

const buttonStyles = {
    root: {
        width: '100%',
        height: '50px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        borderRadius: 0,
        border: 'none',
        marginBottom: '8px',
        transition: 'background-color 0.2s',
    },
};

function GameMenu() {

    return (
        <Box
            style={{
                width: '1280px',
                height: '720px',
                position: 'relative'
            }}

        >

            <Scene />


        </Box>
    );
}

export default function AmericanFugitiveMenu() {
    return (
        <div>
            <GameMenu />
            \
        </div>
    );
}

