import React from 'react';
import styled from 'styled-components';

class Business extends React.Component {
	render() {

		const Business = styled.div`
			width: 100%;
			height: 600px;
			background-image: url('./images/business.jpg');
			background-size: cover;
			background-attachment: fixed;
			background-repeat: no-repeat;
			padding: 12px;
			color: #E8E8E8;
			position: relative;
			overflow: hidden;

			h1{
				font-size: 3.5em;
				margin: 10% 0 0 10px;
				text-transform: capitalize;

				@media screen and (max-width: 600px){
					margin: 15% 0 0 10px;
					font-size: 2.5em;
				}
			}

			p{
				font-size: 1.4em;
				color: darken(#E8E8E8, 10%);
				margin-left: 15px;
				@media screen and (max-width: 600px){
					font-size: 1em;
				}
			}

			.special-holder{
				width: 100%;
				height: 100px;
				background: rgba(0,0,0,0.7);
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				display: flex;
				justify-content: space-around;
				align-items: center;

				[class *=cr-]{
					background: none;
					width: 30%;
					height: auto;
					padding-top: 8px;
					text-align: center;

					.img-cont{
						width: 50px;
						height: 50px;
						border-radius: 50%;
						margin: 3% auto;
						border: 1px solid #E8E8E8;
						padding: 4px;

						img{
							width: 100%;
							height: 100%;
							object-fit: cover;
							border-radius: 50%;
						}
					}

					p{
						font-size: 0.7em;
						margin-left: 0;
						margin-bottom: 3%;
					}
				}
			}
		`;

		return (
			<Business className="business">
				<h1>
					grow <br /> your business
				</h1>
				<br /><br />

				<p>
					People need to know who you are. <br />
					Let them reach you through
					the interactive website <br/>
					<q><i>That's what I am here for...</i></q>
				</p>

				<div className="special-holder">
					<div className="cr-1">
						<div className="img-cont">
							<img src="./images/seo.png" alt="Website Speed" />
						</div>	
						<p>SE Optimized</p>
					</div>

					<div className="cr-1">
						<div className="img-cont">
							<img src="./images/mobile.png" alt="Website Speed" />
						</div>	
						<p>Mobile Friendly</p>
					</div>

					<div className="cr-1">
						<div className="img-cont">
							<img src="./images/speed.png" alt="Website Speed" />
						</div>	
						<p>Faster To Load</p>
					</div>
				</div>
			</Business>
		)
	}
}

export default Business