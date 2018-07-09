import React from 'react';
import style from './Todo.css';

const Item = props => <li className={style.TodoItem} id={props.id} onClick= {() => props.remove(props.id)}>{props.name}</li>

export default Item;