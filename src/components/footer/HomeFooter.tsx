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
          <li>
            <a href="https://www.facebook.com/nourxxIt/">
              <img src="/img/facebook.png" alt="facebook" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/nour_it_" data-screen-name="@nour_it_">
              <img src="/img/twitter.png" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nour-it/">
              <img src="/img/linkedin.png" alt="linkedin" />
            </a>
          </li>
          <li><img src="/img/instagram.png" alt="instagram" /></li>
        </ul>
      </nav><span className="copy-right">@nourit. All rights reserved</span>
    </footer>
  )
}
