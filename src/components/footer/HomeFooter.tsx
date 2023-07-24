import React, { useEffect, useState } from 'react'
import NourGridView from '../core/NourGridView'


export default function HomeFooter() {
  const [state, setState] = useState({ mounted: false })

  useEffect(() => {
    setState((state) => ({ ...state, mounted: true }))
    return () => {
      setState((state) => ({ ...state, mounted: false }))
    }
  }, [])

  if (!state.mounted) return <></>

  return (
    <footer className="footer">
      <div className="logo">Nour<span>It</span></div>
      <nav>
        <ul>
          <li className="h2">About</li>
          <li className="h2">projects</li>
          <li className="h2">Services</li>
        </ul>
        <ul>
          {FOOTER_ITEM.map(footerItem)}
        </ul>
      </nav><span className="copy-right">@nourit. All rights reserved</span>
    </footer>
  )
}

function footerItem(item: any, index: number, array: String[]): React.ReactNode {
  return <li key={index.toString()}>
    <a href={item.link}>
      <img src={`/img/social/${item.img}`} alt="linkedin" height={32}/>
    </a>
  </li>
}

const FOOTER_ITEM: any[] = [
  {
    img: "Facebook.svg",
    link: "https://www.facebook.com/nourxxIt/"
  },
  {
    img: "Twitter.svg",
    link: "https://twitter.com/nour_it_"
  },
  {
    img: "Linkedin.svg",
    link: "https://www.linkedin.com/in/nour-it/"
  },
  {
    img: "Instagram.svg",
    link: "https://www.instagram.com/nour.it.ng/"
  },
]