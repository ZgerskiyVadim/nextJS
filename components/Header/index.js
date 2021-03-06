import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import { PATHS } from '../../constants'
import './style.scss';

const Header = () => (
    <header className={'header'}>
        <div className={'container'}>
            <div className={'navbar-inner'}>
                <div className={'navbar-logo'}>
                    <Link href={'/'}>
                        <a title="Lition">
                            <img src="https://www.lition.de/wp-content/uploads/2018/04/logo-sprite.png" alt="logo"/>
                        </a>
                    </Link>
                </div>
                <nav className={'navbar-nav'}>
                    <ul className="menu">
                        <ActiveLink className="menu-item" href={PATHS.overview.path}>
                            <span>Home</span>
                        </ActiveLink>
                        <ActiveLink className="menu-item" href={PATHS.lition.path}>
                            <span>Lition</span>
                        </ActiveLink>
                        <li className="menu-item">
                            <a href=""><span>Vorteile</span></a>
                        </li>
                        <li className="menu-item">
                            <a href=""><span>Vision</span></a>
                        </li>
                        <li className="menu-item">
                            <a href="http://www.lition.de/konzept"><span>Konzept</span></a>
                        </li>
                        <li className="menu-item">
                            <a href="https://kundenportal.lition.de"><span>Kundenportal</span></a>
                        </li>
                        <li className="menu-item">
                            <a href="http://www.lition.de/team"><span>Über uns</span></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;