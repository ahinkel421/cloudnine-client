import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import LandingPage from './landing-page';
import LoungePage from './lounge-page';
import Navbar from './navbar'
import Footer from './footer';



export default class App extends React.Component {


	render() {
		return(
		<Router>
			<div className="app">
				<Navbar onClick={this.props.onClick} />
				<main>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/lounge/:loungeId" component={LoungePage} />
				</main>
				<Footer />
			</div>
		</Router>
		)
	}
}
