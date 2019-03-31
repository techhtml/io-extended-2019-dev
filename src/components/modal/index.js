import { h, render, Component } from 'preact';
import classNames from 'classnames';
import { route } from 'preact-router';
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

        if(this.props.history) {
            backButton = <button type="button" class={style.backButton} onClick={this.onClickBack}><i aria-hidden="true" class="material-icons">arrow_back</i></button> 
        }

        return (
            <div class={style.modal}>
                <div class={style.modalMain}>
                    <div class={style.modalBody}>
                        { props.children }
                        { backButton }
                    </div>
                </div>
                <div class={style.modalDimd} onClick={this.closeModal}></div>
            </div>
        )
    }
}

export default Modal;