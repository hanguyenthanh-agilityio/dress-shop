import React, { memo } from "react";

// Components
import {
  Button,
  Modal as ModalChakra,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalProps {
  modalTitle: string;
  buttonAction?: string;
  buttonClose?: string;
  children?: React.ReactNode;
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onClick?: () => void;
}

const Modal = memo<ModalProps>(
  ({
    modalTitle,
    buttonClose,
    buttonAction,
    children,
    isOpen,
    isLoading,
    onClose,
    onClick,
  }: ModalProps) => {
    return (
      <ModalChakra isOpen={isOpen} onClose={onClose}>
        <ModalOverlay data-testid="modal-overlay" />
        <ModalContent data-testid="modal-content" mx="10px">
          {/* Header */}
          <ModalHeader textAlign="center" data-testid="title">
            {modalTitle}
          </ModalHeader>
          <ModalCloseButton data-testid="modal-close-button" />
          {/* Body */}
          <ModalBody textAlign="center">{children}</ModalBody>
          {/* Footer */}
          <ModalFooter padding="20px 0" display="flex" justifyContent="center">
            <Button
              variant="add"
              px="15px"
              mr="15px"
              type="submit"
              data-testid="confirm-button"
              isLoading={isLoading}
              onClick={onClick}
            >
              {buttonAction}
            </Button>
            <Button
              variant="close"
              border="1px solid"
              borderRadius="50px"
              px="15px"
              onClick={onClose}
              data-testid="close-button"
            >
              {buttonClose}
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    );
  },
);

export default Modal;
