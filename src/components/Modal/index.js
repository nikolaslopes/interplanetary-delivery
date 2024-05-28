import PropTypes from 'prop-types';

import {
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';

export default function Modal({
  isOpen,
  onClose,
  title,
  subTitle,
  primaryButton,
  secondaryButton,
}) {
  return (
    <ModalChakra isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg='rgba(0, 0, 0, 0.5)' backdropFilter='blur(8px)' />
      <ModalContent background={'gray.600'} maxWidth={['90%', '70%', '500px']}>
        {title ? <ModalHeader marginRight={'8px'}>{title}</ModalHeader> : null}

        <ModalCloseButton />

        <ModalBody>{subTitle ? <Text>{subTitle}</Text> : null}</ModalBody>

        <ModalFooter marginTop='8px'>
          {primaryButton ? primaryButton : null}

          {secondaryButton ? secondaryButton : null}
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  primaryButton: PropTypes.node,
  secondaryButton: PropTypes.node,
};
