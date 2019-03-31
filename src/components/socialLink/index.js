import { h, render, Component } from 'preact';
import style from './style';

class SocialLink extends Component {
    render() {
        if(this.props.socialLink === "") {
            return null;
        }

        return (
            <a href={this.props.socialLink.href} class={style.link} target="_blank">
                {this.props.socialLink.label}
            </a>
        )
    }
}

export default SocialLink;