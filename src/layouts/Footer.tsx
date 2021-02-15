import React, {useContext} from 'react'
import {Anchor, Cloud, Icon, Instagram} from '@/components'
import {ApiContext} from '@/contexts'
import {Slugify} from '@/utils/Slugify'

export const Footer: App.Component = () => {
	const {state} = useContext(ApiContext)

	return (
		<footer className="footer" id="footer">
			<Anchor href="https://www.instagram.com/iambrennanwalsh/">
				<h4 className="footer__ig-header">
					<Icon className="footer__ig-header-icon footer__icon icon--instagram" type="instagram" />
					Follow @iambrennanwalsh
					<span className="is-hidden-mobile"> On Instagram</span>
				</h4>
			</Anchor>
			<Instagram />
			<div className="footer__widgets">
				<div className="footer__summary">
					<img src="/images/me/me.jpg" alt="Brennan Walsh" className="footer__portrait lightbox" />
					<img src="/images/interface/logo.png" alt="BrennanWalsh" className="footer__logo" />
					<p>
						I'm a web, mobile, and software applications developer, and entrepreneur. Welcome to my
						peronsal portfolio, and blog.
					</p>
				</div>
				<hr className="footer__rule" />
				<nav className="footer__nav">
					<div className="footer__nav-list">
						<h5 className="footer__list-header">Navigation</h5>
						<ul className="footer__links">
							<li>
								<Anchor href="/">Home</Anchor>
							</li>
							<li>
								<Anchor href="/about">About</Anchor>
							</li>
							<li>
								<Anchor href="/portfolio">Portfolio</Anchor>
							</li>
							<li>
								<Anchor href="/blog">Blog</Anchor>
							</li>
							<li>
								<Anchor href="/contact">Contact Me</Anchor>
							</li>
						</ul>
					</div>
					<div className="footer__nav-list">
						<h5 className="footer__list-header">Categories</h5>
						<ul className="footer__links">
							{state.categories &&
								state.categories.map(cat => (
									<li key={cat}>
										<Anchor href={`/category/${Slugify(cat)}`}>{cat}</Anchor>
									</li>
								))}
						</ul>
					</div>
					<div className="cloud footer__nav-list">
						<h5 className="footer__list-header">Tags</h5>
						{state.cloud && <Cloud cloud={state.cloud} />}
					</div>
				</nav>
			</div>
			<div className="footer__bottom">
				<p>Brennan Walsh. © 2019</p>
			</div>
		</footer>
	)
}
