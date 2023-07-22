import React, { useEffect, useState } from 'react'


export default function NourContainer(props: any) {
  
  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return <></>
  
  return (
    <div  {...props} className={`container ${props.className || ""}`}>{props.children}</div>
  )
}
