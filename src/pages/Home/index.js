import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import {
  Box,
  Button,
  Heading,
  IconButton,
  List,
  ListItem,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

import PageLayout from '../../components/PageLayout';
import Modal from '../../components/Modal';

import astronautAnimation from '../../assets/animations/astronaut.json';

export default function Home() {
  const [addresses, setAddresses] = useState([]);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  useEffect(() => {
    const storedAddress = JSON.parse(localStorage.getItem('addresses')) || [];

    setAddresses(storedAddress);
  }, []);

  function toggleDeleteModal() {
    setDeleteModalIsOpen((prevState) => !prevState);
  }

  function toggleInfoModal() {
    setInfoModalIsOpen((prevState) => !prevState);
  }

  function saveAddressesToLocalStorage(updatedAddresses) {
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
  }

  function handleDeleteAddress(id) {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
    saveAddressesToLocalStorage(updatedAddresses);
  }

  return (
    <>
      <Modal
        isOpen={deleteModalIsOpen}
        onClose={toggleDeleteModal}
        title={'Tem certeza que deseja excluir o endereço?'}
        subTitle={'Esta ação não poderá ser desfeita!'}
        primaryButton={
          <Button
            colorScheme={'whiteAlpha'}
            variant={'ghost'}
            marginRight={3}
            onClick={toggleDeleteModal}
          >
            Cancelar
          </Button>
        }
        secondaryButton={
          <Button
            colorScheme='red'
            onClick={() => {
              handleDeleteAddress(selectedAddressId);
              toggleDeleteModal();
            }}
          >
            Deletar
          </Button>
        }
      />

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
      <PageLayout title={'Delivery Interplanetário'} backPageLink={false}>
        <Lottie
          animationData={astronautAnimation}
          style={{
            height: '300px',
          }}
          aria-label='Astronaut Animation'
        />

        {addresses.length > 0 && (
          <Box marginTop={'32px'}>
            <Link to='/register'>
              <Button>Registrar novo endereço</Button>
            </Link>
          </Box>
        )}

        <Box width={'100%'}>
          {addresses.length > 0 ? (
            <Heading
              as='h3'
              fontSize={'22px'}
              marginTop={'48px'}
              marginBottom={'16px'}
            >
              Endereços
            </Heading>
          ) : (
            <Box
              marginTop={'32px'}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Heading
                lineHeight='tall'
                fontSize={{ base: '18px', sm: '22px', md: '22px' }}
                textAlign={'center'}
              >
                Parece que você não tem nenhum endereço cadastrado! Clique em
              </Heading>

              <Box marginTop='8px'>
                <Link to='/register'>
                  <Button>Registrar novo endereço</Button>
                </Link>
              </Box>
            </Box>
          )}

          <List spacing={3}>
            {addresses.map((address) => (
              <ListItem key={address.id}>
                <Box
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  paddingY={'8px'}
                >
                  <Box marginRight={'8px'}>
                    {address.lot && (
                      <>
                        <strong>Lote: </strong> {address.lot}
                      </>
                    )}

                    <br />

                    {address.name && (
                      <>
                        <strong>Nome: </strong> {address.name}
                        <br />
                      </>
                    )}

                    {address.planet && (
                      <>
                        <strong>Planeta: </strong> {address.planet}
                      </>
                    )}
                  </Box>

                  <Box display={'flex'}>
                    <Box marginRight={'8px'}>
                      <Link to={`/edit/${address.id}`}>
                        <IconButton icon={<EditIcon />} />
                      </Link>
                    </Box>

                    <IconButton
                      colorScheme='red'
                      icon={<DeleteIcon />}
                      onClick={() => {
                        setSelectedAddressId(address.id);
                        toggleDeleteModal();
                      }}
                    >
                      Deletar
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      </PageLayout>
    </>
  );
}
