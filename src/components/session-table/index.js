import { h, render, Component } from 'preact';
import style from './style';
import { SCHEDULE_LIST } from '../../datas/schedules';
import SessionItem from '../session-item';

class SessionTable extends Component {
    render() {
        return (
            <div class="io-ext-schedule">
                {SCHEDULE_LIST.map(item => (
                    <div class={style.scheduleContainer} key={item.id} index={item.id}>
                        <div class={style.scheduleTime}>
                            <div class={style.scheduleTimeInfo}>{item.startTime}</div>
                            <div class={style.scheduleTimeAmpm}>{item.ampm}</div>
                        </div>
                        <div class={style.scheduleItemContainer}>
                            {item.sessions.map(session => (
                                <SessionItem sessionID={session} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default SessionTable;