import React from 'react';

class Welcome extends React.Component {
	render() {

		return (
			<div className="welcome">
				<div className="me-cont">
					<img src="./images/me.jpg" alt="Issa Jean Marie" />
				</div>	

				<div className="intro-text">
					<h1>
						Hello! <br />
						My name is Issa Jean Marie
					</h1>
					<br />
					<p>I am a freelancer web developer <br /> <q>Ready to be hired!</q></p>
				</div>
				<br />

				<div className="cont-icons">
					<a href="tel: +250788734295">
						<div className="icon-1 fas fa-phone">
					</div></a>
					<a href="mailto: jeanmarieissa@gmail.com">
						<div className="icon-2 fas fa-envelope"></div>
					</a>
					<a href="https://wa.me/+250788734295">
						<div className="icon-3 fab fa-whatsapp"></div>
					</a>
					<a href="https://github.com/issajeanmarie/">
						<div className="icon-4 fab fa-github"></div>
					</a>
					<a href="https://linkedin.com/in/issa-jean-marie-509660151">
						<div className="icon-5 fab fa-linkedin"></div>
					</a>
					<a href="https://www.instagram.com/codes.study/">
						<div className="icon-6 fab fa-instagram"></div>
					</a>
				</div>
			</div>
		)
	}
}

export default Welcome