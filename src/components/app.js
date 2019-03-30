import { h, Component } from 'preact';
import { Router } from 'preact-router';

import NavBar from './navbar';

import Home from '../routes/home';
import Schedule from '../routes/schedule';
import Speakers from '../routes/speakers';
import Attending from '../routes/attending';

export default class App extends Component {
	
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<NavBar />
				<div class="appwrapper">
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Schedule path="/schedule" id="" />
						<Schedule path="/schedule/:id" />
						<Speakers path="/speakers" />
						<Attending path="/attending" />
					</Router>
				</div>
			</div>
		);
	}
}
