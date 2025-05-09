import React from 'react'

import { useWritePrimative } from '../../queue/primative.query'

export default function EarthlyDecorativeFrame() {

  const { data, error, fetchStatus } = useWritePrimative('prm00')

  if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {
   
    return (<div> {JSON.stringify(data)}</div>)
  }

  
}