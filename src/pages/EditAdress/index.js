import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';

import PageLayout from '../../components/PageLayout';

export default function EditAdress() {
  const { id } = useParams();
  const [lot, setLot] = useState('');
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const address = storedAddresses.find((address) => address.id === id);

    if (address) {
      setLot(address.lot);
      setName(address.name);
      setPlanet(address.planet);
    }
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();

    const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
    const updatedAddresses = storedAddresses.map((address) =>
      address.id === id ? { ...address, lot, name, planet } : address,
    );

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
    <PageLayout title='Editar endereço' backPageLink>
      <Box as='form' onSubmit={handleSubmit}>
        <FormControl id='lot' mb={4} isRequired>
          <FormLabel>Lote (quatro dígitos)</FormLabel>
          <Input
            type='text'
            value={lot}
            onChange={handleLotChange}
            placeholder='0000'
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
        <Button type='submit' colorScheme='purple' isDisabled={!lot || !planet}>
          Editar
        </Button>
      </Box>
    </PageLayout>
  );
}
