import React from 'react';
import styled from 'styled-components';

class Contact extends React.Component {

	componentDidMount() {
		const contact = document.querySelector('#contact');
		const contactWrapper = document.querySelector('.contactWrapper');

		const options = {
			threshold: 0.9
		}

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				}

				contactWrapper.classList.add('scroll');
			})
		}, options)

		observer.observe(contact);
	}

	render() {

		const Contact = styled.div`
			text-align: center;
			display: block;
			position: relative;
			overflow: hidden;
		`;

		const A = styled.a`
			color: none;
			text-decoration: none;

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
			<Contact className="welcome" id="contact">

				<div className="contactWrapper"></div>

				<h2>
					How can I get to you?
				</h2>
				<br />

				<p>
					You can reach me through the phone number below. <br />
					Or simply by clicking the icons below. <br />
				</p>
				<br /> <br /><br />

				<h1>
					+250 788 734 295
				</h1>

				<br />
				<div className="cont-icons">
					<A className="a-1" href="tel: +250788734295" title="Mobile Call">
						<Tip className="tip">Phone call</Tip>
						<div className="icon-1 fas fa-phone">
					</div></A>
					<A className="a-2" href="mailto: jeanmarieissa@gmail.com" title="Email">
						<Tip className="tip">Email</Tip>
						<div className="icon-2 fas fa-envelope"></div>
					</A>
					<A className="a-3" href="https://wa.me/+250788734295" title="WhatsApp">
						<Tip className="tip">WhatsApp</Tip>
						<div className="icon-3 fab fa-whatsapp"></div>
					</A>
					<A className="a-4" href="https://github.com/issajeanmarie/" title="GitHub">
						<Tip className="tip">GitHub</Tip>
						<div className="icon-4 fab fa-github"></div>
					</A>
					<A className="a-5" href="https://linkedin.com/in/issa-jean-marie-509660151" title="Linkedin">
						<Tip className="tip">Linkedin</Tip>
						<div className="icon-5 fab fa-linkedin"></div>
					</A>
					<A className="a-6" href="https://www.instagram.com/codes.study/" title="Instagram">
						<Tip className="tip">Instagram</Tip>
						<div className="icon-6 fab fa-instagram"></div>
					</A>
				</div>
				
			</Contact>
		)
	}
}

export default Contact