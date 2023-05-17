import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Heading,
    Text,
    chakra,
    Container,
    VisuallyHidden,
    Link
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';

const Links = [{ name: 'Home', to: '/' }, { name: 'Nosotros', to: '/about' }, { name: 'Planes', to: '/plans' }];

const NavText = ({ children }) => (
    <Text
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Text>
);

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};


export default function Layout({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>
                            <Heading>ENERGIAFIT</Heading>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavText key={link.name}>
                                    <NavLink to={link.to}>
                                        {link.name}
                                    </NavLink>
                                </NavText>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <NavLink to={'/login'}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={
                                            'https://www.une.edu/sites/default/files/2021-05/default-person.png'
                                        }
                                    />
                                </MenuButton>
                            </Menu>
                        </NavLink>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavText key={link.name}>
                                    <NavLink to={link.to}>
                                        {link.name}
                                    </NavLink>
                                </NavText>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
            {children}
            <Box
                bg={useColorModeValue('gray.50', 'gray.900')}
                color={useColorModeValue('gray.700', 'gray.200')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>2023. Construido con 
                        <Link> React.js</Link>, 
                        <Link> ChakraUI</Link>, 
                        <Link> react-router</Link>
                    </Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            <FaTwitter />
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            <FaYoutube />
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            <FaInstagram />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}
