import React from 'react';
import Link from 'next/link';
import Style from './style';

const Header = (props) => (
    <header className={'header'}>
        <div className={'container'}>
            <div className={'navbar-inner'}>
                <div className={'navbar-logo'}>
                    <Link>
                        <a href={'/'} title="Lition">
                            <img src="https://www.lition.de/wp-content/uploads/2018/04/logo-sprite.png" alt="logo"/>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <Style/>
    </header>
);

export default Header;