import React from 'react';
import Style from './style';

const Button = ({href, title}) => (
    <div className={'button'}>
        <a href={href} target="_self">
            {title}
        </a>
        <Style/>
    </div>
);

export default Button;