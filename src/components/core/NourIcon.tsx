import React from 'react'

export default function NourIcon({id, width = 24}: any) {
  return (
    <svg id={id} width={width} height={width}>
      <use xlinkHref={`/icon/sprite.svg#${id}`} />
    </svg>
  )
}
