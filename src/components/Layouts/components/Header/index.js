import './Header.module.scss';
import logo from '../../../../assets/tmovie.png';

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TV Series',
        path: '/tv',
    },
];

function Header() {
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex((e) => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add(cx('shrink'));
            } else {
                headerRef.current.classList.remove(cx('shrink'));
            }
        };

        window.addEventListener('scroll', shrinkHeader);

        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className={cx('wrapper')}>
            <header className={cx('header', 'container')}>
                <div className={cx('header-logo', 'logo')}>
                    <img src={logo} alt="tMovies" />
                    <Link to="/">qMovies</Link>
                </div>
                <nav className={cx('nav')}>
                    <ul className={cx('nav-list')}>
                        {headerNav.map((e, i) => {
                            return (
                                <li key={i} className={cx('nav-item', `${i === active ? 'active' : ''}`)}>
                                    <Link to={e.path}>{e.display}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
