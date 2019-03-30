import { h, render, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';
import { SESSION_LIST } from '../../datas/sessions';
import Category from '../category';
import Modal from '../modal';

class SessionDetail extends Component {
    constructor(props) {
        super(props);

        const id = parseInt(this.props.id);
        const session = SESSION_LIST.find(session => session.id === id);

        this.state = {
            session: session
        }
    }

    render() {
        const session = this.state.session;
        
        return (
            <Modal>
                <div class={style.sessionDetail}>
                    <header class="session-detail-header">
                        <h2 class="session-detail-title">{session.name}</h2>
                        <div class="session-detail-meta">
                            <div class="session-detail-time">
                                {session.startTime} - {session.endTime}
                            </div>
                            <div class="session-detail-place">
                                {session.place}
                            </div>
                        </div>
                        <Link href="/schedule">Back</Link>
                    </header>
                    <div class="session-detail-body">
                        <p class="session-detail-description">
                            {session.description}
                        </p>
                        <div class="session-detail-categories">
                            {session.categories.map(category => (
                                <Category category={category} />
                            ))}
                        </div>
                    </div>
                    <div class="session-detail-speakers"></div>
                </div>
            </Modal>
        )
    }
}

export default SessionDetail;