import React from 'react';
import styled from 'styled-components';

class Welcome extends React.Component {
	render() {

		const A = styled.a`
			color: none;
			text-decoration: none;
			text-align: center;

		`;

		const Tip = styled.div`
			text-decoration: none;
			font-size: 0.9em;
			margin: 2px;
			background: white;
			border-radius: 4px;
			position: relative;
			margin-bottom: 10px;
			color: rgb(100,100,100);
			height: 30px;
			padding: 6px;
			opacity: 0;

			&::after{
				background: white;
				color: rgb(100,100,100);
				content: '.';
				display: block;
				width: 10px;
				hight: 10px;
				position: absolute;
				bottom: -10px;
				left: 42%;
				border-bottom-left-radius: 50px;
				border-bottom-right-radius: 50px;
			}

			@media screen and (max-width: 768px) {
				display: none;
			}
		`;
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
					<A className="a-1" href="tel: +250788734295">
						<Tip className="tip">Phone call</Tip>
						<div className="icon-1 fas fa-phone">
					</div></A>
					<A className="a-2" href="mailto: jeanmarieissa@gmail.com">
						<Tip className="tip">Email</Tip>
						<div className="icon-2 fas fa-envelope"></div>
					</A>
					<A className="a-3" href="https://wa.me/+250788734295">
						<Tip className="tip">WhatsApp</Tip>
						<div className="icon-3 fab fa-whatsapp"></div>
					</A>
					<A className="a-4" href="https://github.com/issajeanmarie/">
						<Tip className="tip">GitHub</Tip>
						<div className="icon-4 fab fa-github"></div>
					</A>
					<A className="a-5" href="https://linkedin.com/in/issa-jean-marie-509660151">
						<Tip className="tip">Linkedin</Tip>
						<div className="icon-5 fab fa-linkedin"></div>
					</A>
					<A className="a-6" href="https://www.instagram.com/codes.study/">
						<Tip className="tip">Instagram</Tip>
						<div className="icon-6 fab fa-instagram"></div>
					</A>
				</div>
			</div>
		)
	}
}

export default Welcome