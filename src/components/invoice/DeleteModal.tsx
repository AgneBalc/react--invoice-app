import ReactDOM from "react-dom";
import {
  Overlay,
  ModalContainer,
  ModalHeading,
  ModalMessage,
  ButtonContainer,
} from "./styles/DeleteModal.styles";
import Button from "../ui/Button";

interface ModalProps {
  id: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Backdrop = () => {
  return <Overlay></Overlay>;
};

const ModalOverlay = ({ id, onConfirm, onCancel }: ModalProps) => {
  return (
    <ModalContainer>
      <ModalHeading>Confirm Deletion</ModalHeading>
      <ModalMessage>
        Are you sure you want to delete invoice #{id}? This action cannot be
        undone.
      </ModalMessage>
      <ButtonContainer>
        <Button variant="secondary" className="cancel" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="warning" className="delete" onClick={onConfirm}>
          Delete
        </Button>
      </ButtonContainer>
    </ModalContainer>
  );
};

const portalElement = document.getElementById("overlays");

const DeleteModal = ({ id, onConfirm, onCancel }: ModalProps) => {
  if (!portalElement) {
    return null;
  }

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay id={id} onConfirm={onConfirm} onCancel={onCancel} />,
        portalElement
      )}
    </>
  );
};

export default DeleteModal;
