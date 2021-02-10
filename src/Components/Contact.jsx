import React from 'react';
import styled from 'styled-components';

class Contact extends React.Component {
	render() {

		const Contact = styled.div`
			text-align: center;
			display: block;
		`;

		return (
			<Contact className="welcome" id="contact">

				<h2>
					How can I get to you?
				</h2>
				<br />

				<p>
					Get to me through the phone number below, <br />
					Or the icons below. <br />
				</p>
				<br /> <br /><br />

				<h1>
					+250 788 734 295
				</h1>

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
				
			</Contact>
		)
	}
}

export default Contact