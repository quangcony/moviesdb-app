import { useRef } from 'react';
import Modal, { ModalContent } from '../components/Modal';

const TrailerModal = (props) => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal-${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer" />
            </ModalContent>
        </Modal>
    );
};

export default TrailerModal;
