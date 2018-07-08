import React from 'react';

const Item = props => <li id={props.id} onClick= {() => props.remove(props.id)}>{props.name}</li>

export default Item;