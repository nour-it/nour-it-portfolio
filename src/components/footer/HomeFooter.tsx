import React, { useEffect, useState } from 'react'
import NourGridView from '../core/NourGridView'
import { Link } from 'react-router-dom'


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
          {FOOTER.menu1item.map(footerItem1)}
        </ul>
        <ul>
          {FOOTER.menu2item.map(footerItem2)}
        </ul>
      </nav><span className="copy-right">@krish4alex. All rights reserved</span>
    </footer>
  )
}

function footerItem1(item: any, index: number, array: String[]): React.ReactNode {
  return <li className="h2" key={index.toString()}>
    <Link to={item.link}>
      {item.val}
    </Link>
  </li>
}

function footerItem2(item: any, index: number, array: String[]): React.ReactNode {
  return <li key={index.toString()}>
    <Link to={item.link}>
      <img src={`/img/social/${item.img}`} alt="linkedin" height={32} />
    </Link>
  </li>
}

const content: any = {
  en: {
    menu1item: [
      {
        val: "About",
        link: "/#about"
      },
      {
        val: "Projects",
        link: "#"
      },
      {
        val: "Services",
        link: "#service"
      },
    ],
    menu2item: [
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
  }
}

const userPreferredLanguage = navigator.language || 'en-EN'
const FOOTER: any = content[userPreferredLanguage.split('-')[0]] || content.en



