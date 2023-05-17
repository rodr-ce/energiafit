import React from 'react'
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Image
} from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW={'3xl'}>
        <Image src='https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={'orange.400'}>
            EnergiaFit
          </Heading>
          </Stack>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 15 }}>
          <Text color={'black.500'}>
          En <Text as={'span'} color={'orange.400'} fontWeight="extrabold">
            EnergiaFit</Text>, creemos en el poder transformador del ejercicio físico 
          y su capacidad para mejorar la vida de las personas. Nuestro gimnasio 
          es más que un lugar para sudar; es un espacio acogedor y vibrante donde 
          puedes conectarte con otros entusiastas del fitness y construir una comunidad saludable.
          </Text>
          <Text color={'black.500'}>
          Nos enorgullece ofrecer una amplia variedad de clases y programas diseñados para adaptarse
          a todas las edades y niveles de condición física. Nuestros entrenadores altamente
          capacitados están comprometidos a brindarte el apoyo y la motivación necesarios para alcanzar tus metas personales.
          </Text>
          <Text color={'black.500'}>
          En EnergiaFit, entendemos que la salud y el bienestar no se limitan solo al aspecto físico.
          Promovemos un enfoque integral hacia el fitness, abarcando también la nutrición y el equilibrio mental. 
          Nuestra filosofía se basa en la idea de que el ejercicio es una forma de autodescubrimiento y un camino hacia una vida más plena.
          </Text>
          <Text color={'black.500'}>
          Al unirte a nuestra comunidad, te beneficiarás de un ambiente positivo y enriquecedor.
          No importa si eres principiante o experto, aquí encontrarás un espacio seguro y amigable para explorar tus límites y superar tus barreras.
          </Text>
          <Text color={'black.500'}>
          Únete a EnergiaFit y descubre cómo puedes alcanzar un equilibrio duradero entre mente, 
          cuerpo y espíritu. Juntos, crearemos un estilo de vida activo y saludable que te empoderará 
          en todos los aspectos de tu vida. ¡Te esperamos con los brazos abiertos!
          </Text>
        </Stack>
        <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}
            py={{ base: 10, md: 10 }}>
            <Button
              colorScheme={'green'}
              bg={'orange.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'orange.500',
              }}>
              Entrena con nosotros!
            </Button>
          </Stack>
      </Container>
  )
}
