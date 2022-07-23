import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import { category } from '../Api/tmdpApi';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const Search = (props) => {
    let navigate = useNavigate();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/${category[props.category]}/search/${keyword}`);
        }
    }, [keyword, props.category, navigate]);

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className={cx('search')}>
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            ></Input>
            <Button className={cx('btn-small')} onClick={goToSearch}>
                Search
            </Button>
        </div>
    );
};

export default Search;
