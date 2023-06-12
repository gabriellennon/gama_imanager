import { ReactNode } from 'react';
import Modal from 'react-modal';

import { Container} from './styles';
import closeSvg from '../../assets/icons/close.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    children: ReactNode;
    handleSubmitFormModal: () => void;
}

export function NewModal({ isOpen, onRequestClose, title, children, handleSubmitFormModal }: NewTransactionModalProps){
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeSvg} alt="Close modal" />
            </button>
            <Container onSubmit={handleSubmitFormModal}>
                <h2>{title}</h2>
                {children}
            </Container>
        </Modal>
    );
}