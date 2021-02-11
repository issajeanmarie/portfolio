import React from 'react';
import styled from 'styled-components';

class Oriented extends React.Component {

	componentDidMount() {
		const oriented = document.querySelector('.oriented');

		const options = {
			threshold: 0.3,
			rootMargin: '-100px'
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				} else{
					oriented.classList.add('scroll');
				}
			})
		}, options);

		observer.observe(oriented)
	}

	render() {
		const Div = styled.div`
			background-image: url('./images/cover.jpg');
			background-size: cover;
			background-repeat: no-repeat;
			background-attachment: fixed;
			padding: 12px;
			width: 100%;
			height: 630px;
			color: #FFF;
			overflow: hidden;

			h1{
				font-size: 4em;
				margin-top: 600px;
				margin-bottom: 5%;
				margin-left: 5%;
			}

			p{
				margin: 0% 0 2% 5%;
				font-size: 1.5em;
				color: #E8E8E8;
			}

			@media screen and (max-width: 768px) {
				height: auto;
				h1{
					font-size: 2.3em;
					margin-top: -600px;
				}

				p{ font-size: 1em; margin-top: 5%; }
			}
		`;

		const Alink = styled.a`
			color: white;
			text-decoration: none;
		`;

		const Button = styled.div`
			background: rgba(0,0,0,0.3);
			margin: 13% auto;
			width: 40%;
			text-align: center;
			padding: 12px;
			border: 3px solid #1094D2;
			border-radius: 50px;
			font-weight: bold;
			font-size: 1.3em;
			cursor: pointer;

			&:hover{
				background: rgba(0,0,0,0.6);
			}

			@media screen and (max-width: 768px) {
				width: 80%;
				margin-top: 20%;
			}
		`;
		return (
			<Div className="oriented">
				<h1>I am work oriented</h1>	
				<p>
					I am interested in building new things
					<br />
					and making changes in people's lives.
					<br /><br /><br />

					Let me build you a website! <br />
					<q>That's what I do...</q>
				</p>
				<b />

				<Alink href="tel:+250788734295">
					<Button>
						+250 788 734 295
					</Button>	
				</Alink>		
			</Div>
		)
	}
}

export default Oriented