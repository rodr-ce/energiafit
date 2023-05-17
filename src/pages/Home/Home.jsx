import React from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Icon,
  Flex
} from '@chakra-ui/react';
import { FcSportsMode, FcLikePlaceholder, FcManager, FcApproval, FcRating, FcIphone } from "react-icons/fc";


const features = [
  {
    title: 'Variedad de entrenamientos',
    text: 'Disfruta de una amplia gama de opciones de entrenamiento, desde clases de alta intensidad hasta actividades relajantes.',
    icon: FcSportsMode
  },
  {
    title: 'Entrenadores expertos',
    text: 'Nuestro equipo de entrenadores altamente capacitados te brindará el apoyo y la orientación necesarios para maximizar tus resultados.',
    icon: FcManager
  },
  {
    title: 'Instalaciones modernas',
    text: 'Descubre nuestras instalaciones de vanguardia equipadas con maquinaria de última generación.',
    icon: FcApproval
  },
  {
    title: 'Comunidad acogedora',
    text: 'Únete a una comunidad vibrante de personas apasionadas por el fitness. Comparte experiencias que te motivarán a alcanzar tus objetivos juntos.',
    icon: FcRating
  },
  {
    title: 'Programas de bienestar',
    text: 'En EnergiaFit, nos preocupamos por tu bienestar general. Ofrecemos programas de nutrición y salud mental que te ayudarán a lograr un equilibrio completo en tu vida.',
    icon: FcLikePlaceholder
  },
  {
    title: 'Seguimiento por App',
    text: 'Contamos con una moderna aplicación para que puedas seguir tus planes de entrenamiento desde tu teléfono o tablet',
    icon: FcIphone
  }
]


export default function Home() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Bienvenido a  <br />
            <Text as={'span'} color={'orange.400'}>
              EnergiaFit
            </Text>
          </Heading>
          <Text color={'black.500'}>
            Tu destino para alcanzar una vida activa y saludable.
            Descubre un nuevo nivel de energía y bienestar con nuestras
            instalaciones de vanguardia y nuestro equipo de entrenadores expertos.
            ¡Prepárate para transformarte!
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'orange.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'orange.500',
              }}>
              Unite!
            </Button>
          </Stack>
        </Stack>
        <Box p={10}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={15}>
            {features.map((feature) => {
              return <Stack align={'center'} key={feature.title}>
                <Flex
                  w={16}
                  h={16}
                  align={'center'}
                  justify={'center'}
                  color={'white'}
                  rounded={'full'}
                  bg={'gray.200'}
                  mb={1}>
                  <Icon as={feature.icon} w={10} h={10}/>
                </Flex>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'} textAlign='center'>{feature.text}</Text>
              </Stack>
            })}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  )
}