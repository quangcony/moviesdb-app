import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import tmdpApi, { category, movieType, tvType } from '../Api/tmdpApi';
import Card from '../Card';
import { OutlineButton } from '../Button';

import classNames from 'classnames/bind';
import styles from './MovieGrid.module.scss';
import Search from '../Search';

const cx = classNames.bind(styles);

const MovieGrid = (props) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;

            if (keyword === undefined) {
                const params = {};
                switch (props.category) {
                    case category.movie:
                        response = await tmdpApi.getMovieList(movieType.upcoming, { params });
                        console.log(response);
                        break;
                    default:
                        response = await tmdpApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdpApi.search(props.category, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        };

        getList();
    }, [props.category, keyword]);

    const loadMore = async () => {
        let response = null;

        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };
            switch (props.category) {
                case category.movie:
                    response = await tmdpApi.getMovieList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdpApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            response = await tmdpApi.search(props.category, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };

    return (
        <>
            <Search keyword={keyword} category={props.category} />
            <div className={cx('movie-grid')}>
                {items.map((item, i) => (
                    <Card key={i} category={props.category} item={item} />
                ))}
            </div>
            {page < totalPage ? (
                <div className={cx('load-more')}>
                    <OutlineButton className={cx('btn-small')} onClick={loadMore}>
                        Load more
                    </OutlineButton>
                </div>
            ) : null}
        </>
    );
};

export default MovieGrid;
