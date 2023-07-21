import React from 'react'

const icons = {
  "arrow": "arrow.png",
  'add-white': "add-white.png",
  'eye': "eye.png",
  'heart': "heart.png",
  "category": "category.png",
  "sub-category": "sub-category.png",
  "asc-name": "asc-name.png",
  "facebook": "facebook.svg",
  "linkedin": "linkedin.svg",
  "twitter": "twitter.svg",
  "google": "google.svg",
  "user": "user.png",
  "bell": "bell.png",
  "off": "off.png"
}

/**
 * 
 * @param {React.ReactElement.props} props 
 * @returns {JSX.Element}
 */
export default function NourIcon(props) {
  return (
    <div className={`icon ${props.className}`} >
      <img src={`/icon/${icons[props.icon]}`} />
    </div>
  )
}
