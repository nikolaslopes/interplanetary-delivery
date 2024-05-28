import { useEffect, useState } from 'react';

import {
  Box,
  Button,
  Heading,
  IconButton,
  List,
  ListItem,
} from '@chakra-ui/react';
import Lottie from 'lottie-react';

import astronautAnimation from '../../assets/animations/astronaut.json';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { api } from '../../services/api';

export default function Home() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    api.get('/address').then((response) => {
      setAddresses(response.data);
    });
  }, []);

  function handleDeleteAddress(id) {
    api.delete(`/address/${id}`).then(() => {
      setAddresses(addresses.filter((address) => address.id !== id));
    });
  }

  return (
    <PageLayout title={'Delivery Interplanetário'} backPageLink={false}>
      <Lottie
        animationData={astronautAnimation}
        style={{
          height: '300px',
        }}
        aria-label='Astronaut Animation'
      />
      <Box>
        <Link to='/register'>
          <Button>Registrar novo endereço</Button>
        </Link>
      </Box>

      <Box width={'100%'}>
        <Heading
          as='h3'
          fontSize={'22px'}
          marginTop={'48px'}
          marginBottom={'16px'}
        >
          Endereços
        </Heading>
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
                  <strong>Nome:</strong> {address.name} <br />
                  <strong>Lote:</strong> {address.lot}
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
                    onClick={() => handleDeleteAddress(address.id)}
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
  );
}
