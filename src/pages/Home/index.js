import { Link } from 'react-router-dom';

import HeroSlide from '../../components/HeroSlide';
import { OutlineButton } from '../../components/Button';
import MovieList from '../../components/MovieList';
import { category, movieType, tvType } from '../../components/Api/tmdpApi';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <section className={cx('section')}>
                    <div className={cx('section-header')}>
                        <h3>Trending Movies</h3>
                        <Link to="/movie">
                            <OutlineButton className={cx('small')}>View More</OutlineButton>
                        </Link>
                    </div>

                    <MovieList category={category.movie} type={movieType.popular} />
                </section>
                <section className={cx('section')}>
                    <div className={cx('section-header')}>
                        <h3>Top Rated Movies</h3>
                        <Link to="/movie">
                            <OutlineButton className={cx('small')}>View More</OutlineButton>
                        </Link>
                    </div>

                    <MovieList category={category.movie} type={movieType.top_rated} />
                </section>
                <section className={cx('section')}>
                    <div className={cx('section-header')}>
                        <h3>Trending TV</h3>
                        <Link to="/movie">
                            <OutlineButton className={cx('small')}>View More</OutlineButton>
                        </Link>
                    </div>

                    <MovieList category={category.tv} type={tvType.popular} />
                </section>

                <section className={cx('section')}>
                    <div className={cx('section-header')}>
                        <h3>Top Rated TV</h3>
                        <Link to="/movie">
                            <OutlineButton className={cx('small')}>View More</OutlineButton>
                        </Link>
                    </div>

                    <MovieList category={category.tv} type={movieType.top_rated} />
                </section>
            </div>
        </>
    );
}

export default Home;
