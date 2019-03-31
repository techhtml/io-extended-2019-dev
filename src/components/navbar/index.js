import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import classNames from 'classnames';

class NavBar extends Component {
    render() {
        const iconClassName = classNames({
            [style.icon]: true,
            "material-icons": true
        });

        return (
            <nav class={style.navbar}>
                <ul class={style.nav}>
                    <li class={style.navItem}>
                        <Link class={style.navLink} activeClassName={style.active} href="/">
                            <i aria-hidden="true" class={iconClassName}>home</i>
                            HOME
                        </Link>
                    </li>
                    <li class={style.navItem}>
                        <Link class={style.navLink} activeClassName={style.active} href="/schedule">
                            <i aria-hidden="true" class={iconClassName}>calendar_today</i>
                            Schedule
                        </Link>
                    </li>
                    <li class={style.navItem}>
                        <Link class={style.navLink} activeClassName={style.active} href="/speakers">
                            <i aria-hidden="true" class={iconClassName}>people</i>
                            Speakers
                        </Link>
                    </li>
                    <li class={style.navItem}>
                        <Link class={style.navLink} activeClassName={style.active} href="/attending">
                            <i aria-hidden="true" class={iconClassName}>directions_walk</i>
                            Community
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;
