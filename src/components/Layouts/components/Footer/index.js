import logo from '../../../../assets/tmovie.png'
import bg from '../../../../assets/footer-bg.jpg'

import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const Footer = (props) => {
  return (
    <footer className={cx('footer')} style={{ backgroundImage: `url(${bg})` }}>
      <div className={cx('footer-content', 'container')}>
        <div className={cx('footer-logo', 'logo')}>
          <img src={logo} alt="tMovies" />
          <Link to="/">qMovies</Link>
        </div>
        <div className={cx('menus')}>
          <div className={cx('menu')}>
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of Service</Link>
            <Link to="/">About us</Link>
          </div>
          <div className={cx('menu')}>
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className={cx('menu')}>
            <Link to="/">You must watch</Link>
            <Link to="/">Recent releases</Link>
            <Link to="/">Top IMB</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
