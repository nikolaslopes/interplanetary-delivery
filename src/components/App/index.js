import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Flex } from '@chakra-ui/react';

import theme from '../../assets/styles/theme';

import Router from '../../Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Flex
          flexDirection={'column'}
          width={'100%'}
          maxWidth={'500px'}
          margin={'0 auto'}
          padding={'0 16px'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Router />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
