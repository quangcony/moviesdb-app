import apiConfig from '../Api/apiConfig';
import { category } from '../Api/tmdpApi';
import Button from '../Button';

import classNames from 'classnames/bind';
import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Card = (props) => {
    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const background = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className={cx('card')} style={{ backgroundImage: `url(${background})` }}>
                <Button className={cx('btn-card')}>
                    <i className="bx bx-play" />
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
};

export default Card;
