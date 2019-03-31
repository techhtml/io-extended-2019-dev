import { h, render, Component } from 'preact';
import { route } from 'preact-router';
import { Link } from 'preact-router/match';
import style from './style';

class Modal extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        }
    }

    componentDidMount() {
        this.setState({
            isOpen: true
        })
    }

    onClickBack() {
        history.back();
    }

    closeModal() {
        route(this.props.from);
    }

    render(props) {
        if(this.state.isOpen === false) {
            return null;
        }

        let backButton = null;
        let closeButton = null;

        if(this.props.history) {
            backButton = <button type="button" class={style.backButton} onClick={this.onClickBack}><i aria-hidden="true" class="material-icons">arrow_back</i></button> 
        }

        if(this.props.from) {
            closeButton = <Link href={this.props.from} class={style.close}><i aria-hidden="true" class="material-icons">close</i></Link>
        }

        return (
            <div class={style.modal}>
                <div class={style.modalMain}>
                    <div class={style.modalBody}>
                        { props.children }
                        { backButton }
                        {closeButton }
                    </div>
                </div>
                <div class={style.modalDimd} onClick={this.closeModal}></div>
            </div>
        )
    }
}

export default Modal;