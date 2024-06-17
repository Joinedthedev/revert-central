import { ReactNode } from 'react';
import "@/public/oldSalim.jpg";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Img,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import SearchInput from '../SearchInput';
import { User } from 'firebase/auth';
import RightContent from './RightContent/RightContent';
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import {
  defaultMenuItem,
  directoryMenuState,
} from "../../atoms/directoryMenuAtom";
import { auth } from "../../firebase/clientApp";
import Directory from './Directory/Directory';
import router from "next/router";
import useDirectory from '@/hooks/useDirectory';


const Links = ['Pillars', 'Our Prophet', 'Community'];

const NavLink = ({ children }: { children: ReactNode }) => (
  
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: "green.300"
    }}
    href={'/community'}>
    {children}
  </Link>
);
type NavBarProps = {
  variant: "default" | "community";
};
export default function NavBar({variant}:NavBarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = useAuthState(auth);
  const { onSelectMenuItem } = useDirectory();

  return (
    <>
     {variant === "default" ? (
      <Box bg={"green.100"} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link 
            href='/'
            _hover={{
              textDecoration: 'none',
             
            }}>
              <Box>Revert Central</Box>

            </Link>
           
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                 src={'@/public/oldSalim'}
                    
                  
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Communities</MenuItem>
                <MenuDivider/>
                <MenuItem>Profile</MenuItem>
              
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
     
      </Box>
  ):   <Flex
  bg="green.300"
  height="44px"
  padding="6px 12px"
  justifyContent={{ md: "space-between" }}
>
  <Flex
    align="center"
    width={{ base: "40px", md: "auto" }}
    mr={{ base: 0, md: 2 }}
    cursor="pointer"
    onClick={() => onSelectMenuItem(defaultMenuItem)}
  >
      <Link 
            href='/'
            _hover={{
              textDecoration: 'none',
             
            }}>
              <Box>Revert Central</Box>

            </Link>
    
  </Flex>
  {user && <Directory />}
  <SearchInput user={user as User} />
  <RightContent user={user as User} />
</Flex>

          } 
    </>
  );
}