import background from '../../assets/footer-bg.jpg';

import classNames from 'classnames/bind';
import styles from './PageHeader.module.scss';

const cx = classNames.bind(styles);

const PageHeader = (props) => {
    return (
        <div className={cx('page-header')} style={{ backgroundImage: `url(${background})` }}>
            <h2>{props.children}</h2>
        </div>
    );
};

export default PageHeader;
