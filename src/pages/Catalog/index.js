import { useParams } from 'react-router';

import PageHeader from '../../components/PageHeader';
import { category as cate } from '../../components/Api/tmdpApi';

import classNames from 'classnames/bind';
import styles from './Catalog.module.scss';
import MovieGrid from '../../components/MovieGrid';

const cx = classNames.bind(styles);

const Catalog = () => {
    const { category } = useParams();

    return (
        <>
            <PageHeader>{category === cate.movie ? 'Movies' : 'TV Series'}</PageHeader>
            <div className={cx('container')}>
                <section className={cx('section')}>
                    <MovieGrid category={category} />
                </section>
            </div>
        </>
    );
};

export default Catalog;
