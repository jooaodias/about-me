import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from '../NavLink';
import { TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';

const Links = ['About me', 'Skills', 'Contact', 'Hobbies'];

export default function HeaderMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={'gray.900'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link) => (
              <NavLink key={link} id={link}>
                {link}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <HStack spacing={1}>
          <a href="https://github.com/jooaodias" target="_blank" title="Github">
            <Icon
              as={TiSocialGithub}
              h={12}
              w={12}
              color="white"
              _hover={{ color: 'gray.400' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/joao-aleixo-dias/"
            target="_blank"
            title="LinkedIn"
          >
            <Icon
              as={TiSocialLinkedin}
              h={10}
              w={10}
              color="white"
              _hover={{ color: 'blue.300' }}
            />
          </a>
          <Avatar
            size={'sm'}
            src={'https://avatars.githubusercontent.com/u/52572698?v=4'}
          />
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} id={link}>
                {link}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
