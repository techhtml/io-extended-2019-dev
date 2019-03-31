import { h, render, Component } from 'preact';
import style from './style';
import { Link } from 'preact-router/match';
import { SESSION_LIST } from '../../datas/sessions';
import classNames from 'classnames';
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
            <Modal from="schedule">
                <div class={style.sessionDetail}>
                    <div class={style.image}></div>
                    <div class={style.content}>
                        <header>
                            <h2 class={style.sessionTitle}>{session.name}</h2>
                            <div class={style.sessionMeta}>
                                <div class={style.sessionTime}>
                                    {session.startTime} - {session.endTime}
                                </div>
                                <div class={style.sessionPlace}>
                                    {session.place}
                                </div>
                            </div>
                            <Link href="/schedule" class={style.close}>
                                <i aria-hidden="true" class="material-icons">close</i>
                            </Link>
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
                </div>
            </Modal>
        )
    }
}

export default SessionDetail;