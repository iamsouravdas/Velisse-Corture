import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import type { modalProps } from './modal.type';



const ModalComponent = (props: modalProps) => {

    const { title, body, setShow, show } = props;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {
                        title ?? <Modal.Title>{title}</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    {body}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalComponent