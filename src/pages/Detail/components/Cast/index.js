import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdpApi from '../../../../components/Api/tmdpApi';
import apiConfig from '../../../../components/Api/apiConfig';

import className from 'classnames/bind';
import styles from './Cast.module.scss';

const cx = className.bind(styles);

const Cast = (props) => {
    const { category } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            let response = await tmdpApi.credits(category, props.id);
            setCasts(response.cast.slice(0, 5));
        };

        getCredits();
    }, [category, props.id]);

    return (
        <div className={cx('casts')}>
            {casts.map((cast, i) => (
                <div key={i} className={cx('item')}>
                    <div
                        className={cx('avatar')}
                        style={{ backgroundImage: `url(${apiConfig.w500Image(cast.profile_path)})` }}
                    ></div>

                    <div className={cx('name')}>{cast.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Cast;
