// Modal.tsx
import React from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';

interface ModalProps {
  plant: {
    name: string;
    careGuide: string;
  };
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ plant, onClose }) => {
  return (
    <BootstrapModal show={true} onHide={onClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{plant.name} Care Guide</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <h5>Care Instructions:</h5>
        <p>{plant.careGuide}</p>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

export default Modal;
