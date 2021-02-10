import React from 'react';

class Header extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 status: true
		}

		this.menuTrigger = this.menuTrigger.bind(this);
	}

	menuTrigger() {

		const nav = document.querySelector('.nav');
		const header = document.querySelector('header');
		const respos = document.querySelectorAll('[class *=respo-]');

		if (this.state.status) {
			header.classList.add('nav-small-open');
			nav.classList.add('nav-small-open');

			respos.forEach(respo => {
				respo.classList.add('close');
			});

			//Change state
			this.setState({
				status: false
			})
		} else{
			header.classList.remove('nav-small-open');
			nav.classList.remove('nav-small-open');

			respos.forEach(respo => {
				respo.classList.remove('close');
			});

			//Change state
			this.setState({
				status: true
			})
		}
	}

	componentDidMount() {
		//Add intersection observer
		const welcome = document.querySelector('.welcome');
		const header = document.querySelector('.header');
		const options = {
			rootMargin: '-10px 0px 0px 0px'
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					header.classList.add('sticky')
				} else{
					header.classList.remove('sticky')
				}
			})
		}, options);

		observer.observe(welcome);
	}

	render() {

		return (
			<header className="header">

				<div className="logo-section">
					<img src="./images/logo.png" alt="Issa Jean Marie Logo" />
				</div>

				<nav className="nav">
					<a href="#assurance">Assurance</a>
					<a href="#skillset">Skillset</a>
					<a href="#work">Work</a>
					<a href="#contact" className="contact">Contact</a>
				</nav>

				<div className="nav-respo" onClick={this.menuTrigger}>
					<div className="respo-1"></div>
					<div className="respo-2"></div>
					<div className="respo-3"></div>
				</div>	
				
			</header>
		)
	}
}

export default Header