import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

import { api } from '../../services/api';

import PageLayout from '../../components/PageLayout';

export default function CreateAdress() {
  const [lot, setLot] = useState('');
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/address', { lot, name }).then(() => {
      navigate('/');
    });
  };

  return (
    <PageLayout title='Novo endereço' backPageLink>
      <Box as='form' onSubmit={handleSubmit}>
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
          />
        </FormControl>
        <Button type='submit'>Cadastrar</Button>
      </Box>
    </PageLayout>
  );
}
