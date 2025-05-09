
import React from 'react'
import { useState, useEffect } from 'react';

import RecordButton from './RecordButton'
import SelectionBox from './SelectionBox'
import Slider from './Slider'

import * as ActBab from '../../111.solid/01.babylon.unit/babylon.action'


export default function Component() {

    setTimeout( ()=>{
        window['SOLID']( ActBab.OPEN_BABYLON, {src:'surface00'})
    }, 333)

    
    return (
    
            <div style={{
                width: '1280px',
                height: '720px',
                position: 'relative',
                backgroundImage: 'url(./img/017.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: "hidden"
            }}>
                <canvas id='surface00' />
            </div>


    );
}