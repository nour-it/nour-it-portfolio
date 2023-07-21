import React, { useEffect, useState } from 'react'

/**
 * 
 * @param {React.ReactElement.props} props 
 * @returns {JSX.Element}
 */
export default function NourContainer(props) {
  
  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return
  
  return (
    <div className='container' {...props}>{props.children}</div>
  )
}
