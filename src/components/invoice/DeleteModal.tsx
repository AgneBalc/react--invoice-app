import ReactDOM from "react-dom";
import { styled } from "styled-components";

interface ModalProps {
  id: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = ({ id, onConfirm, onCancel }: ModalProps) => {
  return (
    <InvoiceModalInner>
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </p>
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Delete</button>
      </div>
    </InvoiceModalInner>
  );
};

const portalElement = document.getElementById("overlays");

const DeleteModal = ({ id, onConfirm, onCancel }: ModalProps) => {
  if (!portalElement) {
    return null;
  }

  return (
    <Modal>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay id={id} onConfirm={onConfirm} onCancel={onCancel} />,
        portalElement
      )}
    </Modal>
  );
};

export default DeleteModal;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 80px);
  height: 100vh;
  z-index: 20;
  transform: translateX(-100vw);
  transition: all 0.3s ease-in-out;
  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &.active {
    transform: translateX(0);
  }
`;

const InvoiceModalInner = styled.div`
  position: relative;
  background-color: #f8f8fb;
  width: 100%;
  height: 100%;
  z-index: 30;
  overflow: hidden;
`;
