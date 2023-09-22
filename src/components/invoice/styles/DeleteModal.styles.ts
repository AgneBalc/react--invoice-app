import { styled } from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.49);
  z-index: 7000;
`;

const ModalContainer = styled.div`
  position: fixed;
  width: calc(100% - 48px);
  max-width: 30rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.deleteModal.bg};
  border-radius: 0.5rem;
  padding: 2rem;
  z-index: 7002;
`;

const ModalHeading = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.deleteModal.heading};
  margin-bottom: 0.75rem;
`;

const ModalMessage = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.deleteModal.body};
  letter-spacing: -0.23px;
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;

export { Overlay, ModalContainer, ModalHeading, ModalMessage, ButtonContainer };
