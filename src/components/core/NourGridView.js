import React, { useEffect, useState } from 'react'

/**
 * 
 * @param {React.ReactElement.props} props 
 * @returns {JSX.Element}
 */
export default function NourGridView(props) {

  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return

  const {data, gridItem} = props

  return (
    <div className={"nour-grid " + props.className }>
      {data?.map((item, key) => gridItem(item, Math.random())) || props.children}
    </div>
  )
}
