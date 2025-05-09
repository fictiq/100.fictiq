import React from 'react'

import { useReadScreen } from '../../queue/screen.query'

export default function EarthlyDecorativeFrame() {

  const { data, error, fetchStatus } = useReadScreen('scr00')

  if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {
   
    return (<div> {JSON.stringify(data)}</div>)
  }

  
}