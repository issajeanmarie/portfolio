import React from 'react'

class Assurance extends React.Component {

	componentDidMount() {
		const asConts = document.querySelectorAll('.asCont');

		const optionsAss = {
			threshold: 0.1,
			rootMargin: "-100px"
		};
		const observerAs = new IntersectionObserver((entries, observerAs) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				} else{					
					entry.target.classList.add('scroll');
				}
			});
		}, optionsAss);

		asConts.forEach(asCont => {
			observerAs.observe(asCont);
		})
	}

	render() {
		return (
			<div className="assurance" id="assurance">
				<div className="ass-1">
					<div className="asHeader">
						<span className="fas fa-tty"></span>
					</div>

					<div className="asCont">
						<h1>COMMUNICATION</h1>
						<p>
							We will get through every step of the project development together<br />
							I will keep you posted on any project improvement.<br />
							And you will be free to ask for any changes.
						</p>
					</div>
				</div>

				<div className="ass-1">
					<div className="asHeader">
						<span className="fas fa-check-circle" style={{fontSize: '1.3em', lineHeight: '95px'}}></span>
					</div>

					<div className="asCont">
						<h1>ACCURACY</h1>
						<p>
							I give exactly what you asked for! No deceiving.<br />
							You are totally free to complain anytime not satisfied by  my product.<br />
							I give the accurate products!
						</p>
					</div>
				</div>

				<div className="ass-1">
					<div className="asHeader">
						<span className="fas fa-user-check"></span>
					</div>

					<div className="asCont">
						<h1>INTEGRITY</h1>
						<p>
							Handing your problem to me is the first trust, I appreciate that!<br />
							Keep that trust and you won't regret it.<br />
							I keep my word! 
						</p>
					</div>
				</div>

				<div className="ass-1">
					<div className="asHeader">
						<span className="fas fa-user-clock"></span>
					</div>

					<div className="asCont">
						<h1>PUNCTUALITY</h1>
						<p>
							I highly respect the deadline.<br />
							The exact time of submission will highly be respected.<br />
							I make your time count!
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Assurance