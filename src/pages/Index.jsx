import React from "react";
import { ChakraProvider, Box, Flex, Heading, Input, Button, VStack, HStack, Text, Spacer, Image, Container, extendTheme } from "@chakra-ui/react";
import { FaSearch, FaDatabase, FaSave } from "react-icons/fa";

// Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={5}>
        <VStack spacing={8}>
          <Image src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnRlcm5ldCUyMGRhdGElMjBjb25jZXB0fGVufDB8fHx8MTcwOTE4MzU3MHww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" boxSize="150px" objectFit="cover" alt="Internet Data Concept" />
          <Heading as="h1" size="2xl">
            Internet Archive Hub
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Explore and save the wealth of knowledge from the internet.
          </Text>
          <Flex as="form" width="full" align="center">
            <Input placeholder="Search the internet archive..." size="lg" mr={2} />
            <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg">
              Search
            </Button>
          </Flex>
          <HStack spacing={5} width="full" justify="center">
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <VStack spacing={3}>
                <FaDatabase size="3em" color="#3182ce" />
                <Heading as="h3" size="md">
                  Archive
                </Heading>
                <Text>Access the vast information archived from the internet.</Text>
              </VStack>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
              <VStack spacing={3}>
                <FaSave size="3em" color="#3182ce" />
                <Heading as="h3" size="md">
                  Save
                </Heading>
                <Text>Preserve important data and web pages for future generations.</Text>
              </VStack>
            </Box>
          </HStack>
          <Spacer />
          <Text fontSize="sm" color="gray.500">
            © 2023 Internet Archive Hub. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
