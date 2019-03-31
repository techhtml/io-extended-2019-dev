import { h, render, Component } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import SpeakerList from '../../components/speaker-list';
import SpeakerDetail from '../../components/speaker-detail';

class Speakers extends Component {
	render({ id }) {
		let speakerDetail = null;

		if(id) {
			speakerDetail = <SpeakerDetail id={id} />
		}
		return (
			<div class="home io-2019-extended">
				<Hero title="Speakers" />
				<SpeakerList />
				{ speakerDetail }
			</div>
		)
	}
}

export default Speakers;
