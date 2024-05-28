import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

import PageLayout from '../../components/PageLayout';

export default function CreateAdress() {
  const [lot, setLot] = useState('');
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newAddress = { id: Date.now().toString(), lot, name, planet };
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const updatedAddresses = [...storedAddresses, newAddress];
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    navigate('/');
  }

  function handleLotChange(event) {
    setLot(event.target.value);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handlePlanetChange(event) {
    setPlanet(event.target.value);
  }

  return (
    <PageLayout title='Novo endereço' backPageLink>
      <Box as='form' onSubmit={handleSubmit}>
        <FormControl id='lot' mb={4} isRequired>
          <FormLabel>Lote (quatro dígitos)</FormLabel>
          <Input
            type='text'
            value={lot}
            onChange={handleLotChange}
            placeholder='0000*'
            maxLength={4}
          />
        </FormControl>
        <FormControl id='name' mb={4}>
          <FormLabel>Nome do Lote</FormLabel>
          <Input
            type='text'
            value={name}
            onChange={handleNameChange}
            placeholder='Nome do lote'
            maxLength={25}
          />
        </FormControl>
        <FormControl id='planet' mb={4} isRequired>
          <FormLabel>Planeta</FormLabel>
          <Select
            placeholder='Selecione um planeta'
            value={planet}
            onChange={handlePlanetChange}
          >
            <option value='Terra'>Terra</option>
            <option value='Marte'>Marte</option>
          </Select>
        </FormControl>
        <Button type='submit' isDisabled={!lot || !planet}>
          Cadastrar
        </Button>
      </Box>
    </PageLayout>
  );
}
