import { useEffect, useRef } from 'react';

import className from 'classnames/bind';
import styles from './VideoItem.module.scss';

const cx = className.bind(styles);

const VideoItem = (props) => {
    const item = props.item;

    const iframeRef = useRef(null);

    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    });

    return (
        <div className={cx('video')}>
            <div className={cx('title')}>
                <h2>{item.name}</h2>
            </div>

            <iframe
                ref={iframeRef}
                src={`https://www.youtube.com/embed/${item.key}`}
                width="100%"
                title="Video"
            ></iframe>
        </div>
    );
};

export default VideoItem;
