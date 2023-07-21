import React from 'react'

export default function Separator() {
  return (
    <div className="seprarator">
    <svg width="16" height="17">
      <use xlinkHref="/css/sprite.svg#arrow-down-svg" />
    </svg>
    <span className="text-gray-1">scroll down</span>
  </div>
  )
}
