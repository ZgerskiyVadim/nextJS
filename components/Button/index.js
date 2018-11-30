import React from 'react';
import './style.scss';

const Button = ({href, title}) => (
    <div className={'button'}>
        <a href={href} target="_self">
            {title}
        </a>
    </div>
);

export default Button;