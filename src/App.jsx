import React from 'react';
import './Components/Styles/style.min.css';
import Header from './Components/Header.jsx';
import Welcome from './Components/Welcome.jsx';
import Oriented from './Components/Oriented.jsx';
import Assurance from './Components/Assurance.jsx';
import Business from './Components/Business.jsx';
import Skillset from './Components/Skillset.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';

class App extends React.Component {
	render() {

		return(
			<React.Fragment>
				<Header />
				<Welcome />
				<Oriented />
				<Assurance />
				<Business />
				<Skillset />
				<Contact></Contact>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App