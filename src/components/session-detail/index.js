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
        const logoClassName = classNames({
            [style.logo]: true,
            'io-logo': true
        })
        
        return (
            <Modal>
                <div class={style.sessionDetail}>
                    <div class={style.image}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="106.76px" height="86.095px" viewBox="0 0 213.51 172.19" class={logoClassName} style="enable-background:new 0 0 213.51 172.19;filter:brightness(100)">
                        <defs>
                        </defs>
                        <g>
                            <text transform="matrix(1 0 0 1 0 138.6017)" class="st0 st1 st2">Extended</text>
                            <text transform="matrix(1 0 0 1 82.001 166.9815)" class="st0 st1 st3">Seoul</text>
                            <g>
                                <rect id="XMLID_1_" x="47.31" y="11.93" class="st4" width="32.31" height="64.61"/>
                                <path class="st5" d="M139.62,14.04c16.65,0,30.2,13.55,30.2,30.2s-13.55,30.2-30.2,30.2s-30.2-13.55-30.2-30.2
                                    S122.97,14.04,139.62,14.04 M139.62,10.77c-18.48,0-33.46,14.98-33.46,33.46c0,18.48,14.98,33.46,33.46,33.46
                                    s33.46-14.98,33.46-33.46C173.08,25.76,158.1,10.77,139.62,10.77L139.62,10.77z"/>
                                
                                    <rect x="49.71" y="43.48" transform="matrix(0.2206 -0.9754 0.9754 0.2206 30.4513 128.5988)" class="st6" width="91.98" height="3.54"/>
                            </g>
                        </g>
                        </svg>

                    </div>
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