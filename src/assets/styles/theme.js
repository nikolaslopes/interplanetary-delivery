import { extendTheme } from '@chakra-ui/react';

const Button = {
  defaultProps: {
    colorScheme: 'purple',
  },
};

const Input = {
  variants: {
    custom: {
      field: {
        background: 'transparent',
        color: 'gray.100',
        border: '2px solid',
        _focus: {
          borderColor: 'purple.400',
        },
      },
    },
  },
  defaultProps: {
    variant: 'custom',
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Sora', sans-serif`,
    body: `'Sora', sans-serif`,
  },
  components: {
    Button,
    Input,
  },
  styles: {
    global: {
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        background: 'gray.700',
        color: 'gray.50',
      },
    },
  },
});

export default theme;
