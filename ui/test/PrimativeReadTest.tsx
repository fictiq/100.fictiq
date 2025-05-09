import React from 'react'

import { useReadPrimative } from '../../queue/primative.query'

export default function EarthlyDecorativeFrame() {

  const { data, error, fetchStatus } = useReadPrimative('prm00')

  if (error) return (<div> ERROR: {data['error']} </div>)
  if (data) {
   
    return (<div> {JSON.stringify(data)}</div>)
  }

  
}