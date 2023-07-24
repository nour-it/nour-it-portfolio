import React from 'react'
import NourIcon from '../../../components/core/NourIcon'

export default function Separator() {
  return (
    <div className="seprarator">
      <NourIcon id={"arrow-down-svg"} width="17" />
      <span className="text-gray-1">scroll down</span>
    </div>
  )
}
