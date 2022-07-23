import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

const Modal = (props) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div id={props.id} className={cx('modal', `${active ? 'active' : ''}`)}>
            {props.children}
        </div>
    );
};

export const ModalContent = (props) => {
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove(cx('active'));
        if (props.onClose) props.onClose();
    };

    return (
        <div ref={contentRef} className={cx('modal-content', 'hero-modal__content')}>
            {props.children}
            <div className={cx('close')} onClick={closeModal}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string,
};

ModalContent.propTypes = {
    onClose: PropTypes.func,
};

export default Modal;
