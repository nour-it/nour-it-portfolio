import React from 'react'

export default function NourButton(props: any) {

  if (props.href) {
    return <a {...props} className="btn">{props.children}</a>
  }
  return (
    <button {...props} className="btn">{props.children}</button>
  )
}
