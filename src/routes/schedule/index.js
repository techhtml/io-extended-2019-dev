import { h, render, Component } from 'preact';
import style from './style';
import Hero from '../../components/hero/';
import SessionTable from '../../components/session-table';
import SessionDetail from '../../components/session-detail';

class Schedule extends Component {
	render({ id }) {
		let sessionDetail = null;

		if(id) {
			sessionDetail = <SessionDetail id={id} />
		}

		return (
			<div class="home io-2019-extended">
				<Hero title="Schedule" />
				<SessionTable />
				{ sessionDetail }
			</div>
		)
	}
}

export default Schedule;
