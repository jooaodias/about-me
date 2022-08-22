import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface NavLinkProps {
  children: ReactNode;
  id: string;
}

export const NavLink = ({ children, id }: NavLinkProps) => (
  <Link
    px={2}
    py={1}
    color="white"
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.700',
      color: 'white',
    }}
    href={`#${id}`}
  >
    {children}
  </Link>
);
