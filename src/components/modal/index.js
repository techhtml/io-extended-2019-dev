import { h, render, Component } from 'preact';
import classNames from 'classnames';
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

    render(props) {
        if(this.state.isOpen === false) {
            return null;
        }

        return (
            <div class={style.modal}>
                <div class={style.modalMain}>
                    <div class={style.modalBody}>
                        { props.children }
                    </div>
                </div>
                <div class={style.modalDimd}></div>
            </div>
        )
    }
}

export default Modal;