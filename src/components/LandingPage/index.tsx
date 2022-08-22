import { Box, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { GiBrazilFlag } from 'react-icons/gi';
import Skills from '../Skills';

const LandingPage = () => {
  return (
    <>
      <Box py={24} bg="gray.800" color="white" w={'100%'}>
        <Stack
          spacing={8}
          direction="row"
          alignItems={'center'}
          justifyContent="center"
        >
          <Box p={5} color={'purple.400'}>
            <Heading fontSize="xx-large">João Vitor Aleixo Dias</Heading>
            <Icon
              mt={2}
              as={GiBrazilFlag}
              width={10}
              height={10}
              color={'green.400'}
            />
            <Text mt={2}>
              Frontend Developer {'->'} React.JS, NextJS, React Native
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box bg="gray.700" color="white" w={'100%'}>
        <Skills />
      </Box>
    </>
  );
};

export default LandingPage;
