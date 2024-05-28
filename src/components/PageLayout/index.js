import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
} from '@chakra-ui/react';

import { ArrowBackIcon, InfoIcon } from '@chakra-ui/icons';

import Modal from '../Modal';

export default function PageLayout({ title, backPageLink, children }) {
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);

  function toggleInfoModal() {
    setInfoModalIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <Modal
        isOpen={infoModalIsOpen}
        onClose={toggleInfoModal}
        title={'Olá! Tudo bem?'}
        subTitle={
          'Esta aplicação utiliza o Local Storage do seu navegador para armazenar os endereços cadastrados.'
        }
        primaryButton={
          <Button marginRight={3} onClick={toggleInfoModal}>
            Ok. Entendi!
          </Button>
        }
      />
      <Flex
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        margin={'32px'}
        width='100%'
      >
        <Box
          as='header'
          width={'100%'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
          marginBottom={'64px'}
        >
          {backPageLink && (
            <Box>
              <Link to='/'>
                <IconButton
                  size='sm'
                  colorScheme={'purple'}
                  aria-label='a'
                  icon={<ArrowBackIcon />}
                />
              </Link>
            </Box>
          )}

          <Box>
            <Spacer />
          </Box>

          <Box>
            <Heading
              as={'h2'}
              color={'purple.50'}
              fontSize={{ base: '22px', sm: '20px', md: '32px' }}
            >
              {title}
            </Heading>
          </Box>

          <Box>
            <IconButton
              size='sm'
              colorScheme={'purple'}
              aria-label='a'
              onClick={toggleInfoModal}
              icon={<InfoIcon />}
            />
          </Box>
        </Box>
        {children}
      </Flex>
    </>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string,
  backPageLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
