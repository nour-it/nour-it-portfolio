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

function FooterGridItem({ item }: any) {
  return <div className='grid-el'>
    <h1>{item.title}</h1>
    <ul>
      {item.children.map((c: any, i: number) => <li key={i}>{c.label}</li>)}
    </ul>
  </div>
}

const footerElements = [
  {
    id: 1,
    title: "Société",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 2,
    title: "Partenaire et revendeur",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 3,
    title: "Nous contacter",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 4,
    title: "Suivez nous",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 5,
    title: "Informations Légales",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 6,
    title: "Télécharger Matwi Mobile",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
  {
    id: 7,
    title: "News Letter",
    children: [
      {
        label: "Qui sommes nous ?"
      },
      {
        label: "Notre Concepte"
      },
      {
        label: "Nous contacter"
      },
    ]
  },
]
