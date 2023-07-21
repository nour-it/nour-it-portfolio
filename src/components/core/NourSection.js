import React, { useEffect, useState } from 'react'

/**
 * 
 * @param {React.ReactElement.props} props 
 * @returns {JSX.Element}
 */
export default function NourSection(props) {

  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return
  
  return (
    <section {...props}>{props.children}</section>
  )
}
