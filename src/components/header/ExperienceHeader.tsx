import React from 'react'
import NourIcon from '../core/NourIcon'
import { Link } from 'react-router-dom'
import { URLS } from '../../data/url'

export default function ExperienceHeader() {

	console.log(window.history)


	return (
		<header className="header">
			<Link to={URLS.home} className='center'>
				<NourIcon id={window.history.state.idx == 0 ? "home" : "back"} width={window.history.state.idx != 0 ? 18 : 24}/>
				{window.history.state.idx != 0 && "Go back"}
			</Link>
			<div className="logo">Nour<span>It</span></div>
		</header>
	)
}
