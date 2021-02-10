import React from 'react';
import styled from 'styled-components';

class Skillset extends React.Component {
	render() {

		const elements = [
			{img: 'React.png', title: 'ReactJS'},
			{img: 'js.png', title: 'JavaScript'},
			{img: 'sass.png', title: 'Sass (SCSS)'},
			{img: 'css.png', title: 'CSS3'},
			{img: 'html.png', title: 'HTML5'},
			{img: 'bal.png', title: 'Balsamiq Design Tool'},
			{img: 'ps.png', title: 'Adobe Photoshop'},
			{img: 'xd.png', title: 'Adobe XD'},
			{img: 'pgp.png', title: 'PHP'},
			{img: 'sql.png', title: 'SQL'},
			{img: 'mysql.png', title: 'MySQL'},
			{img: 'seo.png', title: 'SE Optimization'},
			{img: 'git.png', title: 'Git'}
		];

		const H = styled.h1`
			padding: 12px;
			color: #1094D2;
		`;

		const Section = styled.section`
			background: #E8E8E8;
			padding: 12px;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-around;

			.SubSec{
				display: flex;
				align-items: center;
				margin: 4%;

				.imgCont{
					width: auto;
					height: 40px;

					img{
						height: 40px;
					}
				}

				p{
					margin-left: 5px;
				}
			}
		`;

		return (
			<div className="skillset" id="skillset">
				<H>Skillset</H>
				<Section>
					{elements.map(element => {
						return(
							<div key={element.img} className='SubSec'>
								<div className="imgCont">
									<img src={`./images/${element.img}`} alt="" />
								</div>
								<p>{element.title}</p>
							</div>
						)
					})}
				</Section>
			</div>
		)
	}
}

export default Skillset