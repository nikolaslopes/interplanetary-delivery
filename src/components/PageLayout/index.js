import PropTypes from 'prop-types';
import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function PageLayout({ title, backPageLink, children }) {
  return (
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
        justifyContent={backPageLink ? 'space-between' : 'center'}
        marginBottom={'64px'}
      >
        {backPageLink && (
          <Box flex={1}>
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

        <Heading
          as={'h1'}
          color={'purple.50'}
          fontSize={{ base: '22px', sm: '20px', md: '32px' }}
        >
          {title}
        </Heading>

        {backPageLink && <Spacer />}
      </Box>
      {children}
    </Flex>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string,
  backPageLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
