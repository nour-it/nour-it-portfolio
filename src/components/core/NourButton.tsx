import React from 'react'
import { Link } from 'react-router-dom'

export default function NourButton(props: any) {

  if (props.href) {
    return <Link {...props} className="btn">{props.children}</Link>
  }
  return (
    <button {...props} className="btn">{props.children}</button>
  )
}
