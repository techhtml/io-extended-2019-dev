import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { SESSION_LIST } from '../../datas/sessions';
import Category from '../category';

class SessionItem extends Component {
    constructor(props) {
        super(props);

        const session = SESSION_LIST.find(session => session.id === this.props.sessionID);

        this.state = {
            session: session
        }
    }

    render() {
        const session = this.state.session;
        const href = '/schedule/' + session.id;

        return (
            <div class={style.scheduleItem}>
                <Link class={style.scheduleLink} href={href}>
                    <div class={style.scheduleName}>
                        {session.name}
                    </div>
                    <div class={style.scheduleMeta}>
                        <div class={style.schedulePlace}>
                            {session.place}
                        </div>
                        <div class={style.scheduleCategories}>
                            {session.categories.map(category => (
                                <Category category={category} />
                            ))}
                        </div>
                        <div class={style.scheduleOutLink}></div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default SessionItem;