import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.add(this.state.value);
        event.preventDefault();
        this.state.value = '';
    }

    render() {
        return (
            <form className={style.TodoForm} onSubmit={this.handleSubmit}>
                <label>
                    <input className = {style.TodoInput} type="text" placeholder = "Write new task..." value={this.state.value} onChange={this.handleChange} />
                </label>
                <button className = {style.TodoButton} type="submit">Add</button>
            </form>
        );
    }
}

export default TodoForm;
