import React from 'react';
import style from './Title.css';

const Title = (title) => {
    return (
        <div className={style.Title}>
            <h1>{title}</h1>
            {/* <p>Tasks number: {number}</p> */}
        </div>
    );
}

export default Title;