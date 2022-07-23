import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdpApi from '../../components/Api/tmdpApi';
import apiConfig from '../../components/Api/apiConfig';
import Cast from './components/Cast';
import Videos from './components/Videos';
import MovieList from '../../components/MovieList';

import className from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = className.bind(styles);

const Detail = () => {
    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const getDetail = async () => {
            let response = await tmdpApi.detail(category, id, { params: {} });
            setItem(response);
            window.scrollTo(0, 0);
        };
        getDetail();
    }, [category, id]);

    return (
        <>
            {item && (
                <>
                    <div
                        className={cx('banner')}
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`,
                        }}
                    ></div>
                    <div className={cx('content', 'container')}>
                        <div className={cx('poster')}>
                            <div
                                className={cx('poster-img')}
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className={cx('info')}>
                            <h1 className={cx('title')}>{item.title || item.name}</h1>
                            <div className={cx('genres')}>
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, i) => (
                                        <span key={i} className={cx('item')}>
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className={cx('overview')}>{item.overview}</p>
                            <div className={cx('casts')}>
                                <div className={cx('section-header')}>
                                    <h2>Casts</h2>
                                    <Cast id={item.id} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('container')}>
                        <section className={cx('section')}>
                            <Videos id={item.id} />
                        </section>

                        <section className={cx('section', 'similar')}>
                            <MovieList category={category} type="similar" id={item.id} />
                        </section>
                    </div>
                </>
            )}
        </>
    );
};

export default Detail;
