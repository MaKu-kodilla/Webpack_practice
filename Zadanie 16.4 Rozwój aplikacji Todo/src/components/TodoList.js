import React from 'react';
import Item from './Todo';
import style from './TodoList.css';

const TodoList = props => {
    const todoListElements = props.todolist.map(element =>
    <Item key={element.id} id={element.id} remove={props.remove.bind(this)} name={element.text} />)
    return (
        <ul className={style.TodoList}>{todoListElements}</ul>
    )
}

export default TodoList;

