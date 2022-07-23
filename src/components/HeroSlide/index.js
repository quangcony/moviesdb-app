import { useState, useEffect } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import tmdpApi, { movieType } from '../Api/tmdpApi';
import HeroSlideItem from './component/HeroSlideItem';
import { TrailerModal } from '../Modal';

import 'swiper/css';
import classNames from 'classnames/bind';
import styles from './HeroSlide.module.scss';

const cx = classNames.bind(styles);

function HeroSlide() {
    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 };

            try {
                const response = await tmdpApi.getMovieList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 4));
            } catch {
                console.log('error');
            }
        };
        getMovies();
    }, []);

    return (
        <div className={cx('hero-slide')}>
            <Swiper
                className={cx('hero-swiper')}
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                // autoplay={{ delay: 3000 }}
            >
                {movieItems.map((item, i) => {
                    return (
                        <SwiperSlide key={i}>
                            {({ isActive }) => <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />}
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {movieItems.map((item, i) => (
                <TrailerModal key={i} item={item} />
            ))}
        </div>
    );
}

export default HeroSlide;
