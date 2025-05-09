import React from 'react'

import { useWriteScreen } from '../../queue/screen.query'

export default function EarthlyDecorativeFrame() {

  const { data, error, fetchStatus } = useWriteScreen('scr00')

  if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {
   
    return (<div> {JSON.stringify(data)}</div>)
  }

  
}