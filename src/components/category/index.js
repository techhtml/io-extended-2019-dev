import { h, render, Component } from 'preact';
import style from './style';
import classNames from 'classnames';

class Category extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const category = this.props.category;
        const categoryClassName = classNames({
            [style.category]: true,
            [category.type]: true
        });
        return (
            <span class={categoryClassName}>{category.label}</span>
        )
    }
}

export default Category;