import React from 'react';
import Link from 'next/link';
import Style from './style';

const Button = ({href, title}) => (
    <div className={'button'}>
        <Link href={href}>
            <a>
                {title}
            </a>
        </Link>
        <Style/>
    </div>
);

export default Button;