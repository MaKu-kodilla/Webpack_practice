import React from 'react';
import style from './Title.css';

const Title = (props) => {
    return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <p>Tasks to do: {props.count}</p>
        </div>
    );
}

export default Title;
