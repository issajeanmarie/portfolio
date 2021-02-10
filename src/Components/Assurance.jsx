import React from 'react'

class Assurance extends React.Component {
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
							We will get through every step of the project development together
							I will keep you posted on any project improvement.
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
							I give exactly what you asked for! No deceiving.
							You are totally free to complain anytime not certisfied by  my product.
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
							Handing your problem to me is the first trust, I appreciate that!
							Keep that trust and you won't regret it.
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
							I highly respect the deadline.
							The exact time of submission will highly be respected.
							I make your time count!
						</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Assurance