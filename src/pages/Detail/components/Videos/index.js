import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import tmdpApi from '../../../../components/Api/tmdpApi';

import className from 'classnames/bind';
import styles from './Videos.module.scss';
import VideoItem from './VideoItem';

const cx = className.bind(styles);

const Videos = (props) => {
    const { category } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            let response = await tmdpApi.getVideos(category, props.id);
            setVideos(response.results.slice(0, 5));
        };

        getVideos();
    }, [category, props.id]);

    return (
        <div className={cx('videos')}>
            {videos.map((video, i) => (
                <VideoItem key={i} item={video} />
            ))}
        </div>
    );
};

export default Videos;
