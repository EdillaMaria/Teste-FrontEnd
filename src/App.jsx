//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
 // const [count, setCount] = useState(0)

 import{
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
 
  Button,
 } from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center
      as="header"
      h={150}
      bg="teal.800"
      color="white"
      fontWeight="bold"
      fontSize="25"
      pb="8"
      >
        Formulário de Cadastro de Alunos
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
        >
          <Center
            w="100%"
            maxW={840}
            bg="white"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
            >
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack justify="center">
                <Box w="70%">
                  <FormLabel htmlFor="nome"><Center>Nome Completo</Center></FormLabel>
                  <Input id="nome"/>
                </Box>
              </HStack>
              <HStack justify="center">
                <Box w="70%">
                  <FormLabel htmlFor="email"><Center>E-mail</Center></FormLabel>
                  <Input id="email" type="email"/>
                </Box>
              </HStack>
              <HStack justify="center">
                <Box w="50%">
                  <FormLabel htmlFor="curso"><Center>Curso</Center></FormLabel>
                  <Input id="curso" type="curso"/>
                </Box>
              </HStack>
              <HStack justify="center">
                 <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="teal.800"
                  color="white"
                  fontWeight="bold"
                  fontSize="x1"
                  mt="2"
                  _hover={{ bg: "teal.800"}}
                  >
                    Enviar
                 </Button>
              </HStack>            
            </FormControl>  
          </Center>
      </Flex>
    </Box>
  );
}

export default App
