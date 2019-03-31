import { h } from 'preact';
import style from './style';
import Hero from '../../components/hero';
import SpeakerList from '../../components/speaker-list';

const Speakers = () => (
	<div class="home io-2019-extended">
		<Hero title="Speakers" />
		<SpeakerList />
	</div>
);

export default Speakers;
