import { useNavigate } from 'react-router-dom';
import apiConfig from '../../../Api/apiConfig';
import Button, { OutlineButton } from '../../../Button';

import classNames from 'classnames/bind';
import styles from './HeroSlideItem.module.scss';
import styles2 from '../../../Modal/components/Modal/Modal.module.scss';

import tmdpApi, { category } from '../../../Api/tmdpApi';

const cx = classNames.bind(styles);
const cx2 = classNames.bind(styles2);

const HeroSlideItem = (props) => {
    let navigate = useNavigate();

    const item = props.item;

    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal-${item.id}`);

        const videos = await tmdpApi.getVideos(category.movie, item.id);

        if (videos.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
            modal.querySelector('.hero-modal__content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.hero-modal__content').innerHTML = 'No Trailer';
        }

        modal.classList.toggle(cx2('active'));
    };

    return (
        <div className={cx('item', `${props.className}`)} style={{ backgroundImage: `url(${background})` }}>
            <div className={cx('content', 'container')}>
                <div className={cx('content-info')}>
                    <h2 className={cx('title')}>{item.title}</h2>
                    <div className={cx('overview')}>{item.overview}</div>
                    <div className={cx('btns')}>
                        <Button onClick={() => navigate('/movie/' + item.id)}>Watch now</Button>

                        <OutlineButton onClick={setModalActive}>Watch trailer</OutlineButton>
                    </div>
                </div>
                <div className={cx('content-poster')}>
                    <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroSlideItem;
