import React from 'react'


export default function NourButton(props) {

  if (props.href) {
    return <a {...props}>{props.children}</a>
  }
  return (
    <button {...props}>{props.children}</button>
  )
}
