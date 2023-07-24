import React, { ReactNode, useEffect, useState, useLayoutEffect, useReducer, useRef, MouseEventHandler } from 'react'

export default function HomeHeader() {

	const [state, setState] = useState({ mounted: false })

	useEffect(() => {

		setState((state) => ({ ...state, mounted: true }))
		return () => {
			setState((state) => ({ ...state, mounted: false }))
		}
	}, [])

	if (!state.mounted) return <></>

	setTimeout(function () {
	
		const $navLinks = document.querySelectorAll('header nav li');
		function onClickNavLink(e: any) {
			$navLinks.forEach(($navLink) => $navLink.classList.remove("active"))
			e.currentTarget.classList.add("active")
		}

		$navLinks.forEach(($navLink, index) => {
			$navLink.addEventListener('click', onClickNavLink)
		})
	}, 1000)

	function onActiveNav(e: React.MouseEvent) {
		const $header: any | HTMLElement = document.querySelector('header');
		// const $burger: any = document.querySelector('.burger');
		const $headerNav: any = document.querySelector('header nav');
		// const target = e.target as HTMLElement
		if (window.innerWidth < 745) {
			if ($headerNav.classList.contains("active")) {
				document.body.style.overflow = "auto"
			} else {
				document.body.style.overflow = "hidden"
			}
			$header.classList.toggle("blur")
			$headerNav.classList.toggle("active")
			$headerNav.classList.toggle("blur")
		}
	}

	return (
		<header className="header" >
			<div className="logo">Nour<span>It</span></div>
			<nav onClick={onActiveNav}>
				<ul >
					{MENU_ITEMS.map(menuItem)}
				</ul>
			</nav>
			<div className="burger__wrapper" onClick={onActiveNav}>
				<div className="burger" ></div>
			</div>
		</header>
	)
}

function menuItem(value: String, index: number, array: String[]): React.ReactNode {
	const isActive = window.location.hash == `#${value}`
	return <li className={`text-black-1 ${isActive ? "active" : ""}`} key={index.toString()}>
		<a href={`#${value.toLocaleLowerCase()}`}>{value.replace(value.charAt(0), value.charAt(0).toLocaleUpperCase())}</a>
	</li>
}


const MENU_ITEMS: String[] = [
	'home',
	'about',
	'service',
	'Skills',
	'Blog',
	'Contact',
]