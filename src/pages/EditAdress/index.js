import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from '@chakra-ui/react';

import { api } from '../../services/api';

import PageLayout from '../../components/PageLayout';

export default function EditAdress() {
  const { id } = useParams();
  const [lot, setLot] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/address/${id}`).then((response) => {
      setLot(response.data.lot);
      setName(response.data.name);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`address/${id}`, { lot, name }).then(() => {
      navigate('/');
    });
  };

  return (
    <PageLayout title='Editar endereço' backPageLink>
      <Box>
        <Heading as='h1' mb={4}>
          Editar Endereço
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id='lot' mb={4}>
            <FormLabel>Lote (quatro dígitos)</FormLabel>
            <Input
              type='text'
              value={lot}
              onChange={(e) => setLot(e.target.value)}
              placeholder='0000'
              maxLength={4}
            />
          </FormControl>
          <FormControl id='name' mb={4}>
            <FormLabel>Nome do Lote</FormLabel>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Nome do lote'
              maxLength={25}
            />
          </FormControl>
          <Button type='submit' colorScheme='purple'>
            Editar
          </Button>
        </form>
      </Box>
    </PageLayout>
  );
}
