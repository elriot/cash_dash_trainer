import "./App.css";
import { Button, HStack, VStack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Dime from "@/components/coins/Dime";
import Nickle from "./components/coins/Nickel";
import Quater from "./components/coins/Quater";
import Loonie from "./components/coins/Loonie";
import Toonie from "./components/coins/Toonie";

function App() {
  return (
    <>
      <p>dfd</p>
      <Button as={Link} to="/study" colorScheme="teal" variant="solid">
        Study
      </Button>
      <HStack spacing={4}>
        <VStack spacing={1}>
          <Nickle />
          <Text fontSize="xs">5¢</Text>
        </VStack>
        <VStack spacing={1}>
          <Dime />
          <Text fontSize="xs">10¢</Text>
        </VStack>
        <VStack spacing={1}>
          <Quater />
          <Text fontSize="xs">25¢</Text>
        </VStack>
        <VStack spacing={1}>
          <Loonie />
          <Text fontSize="xs">1$</Text>
        </VStack>
        <VStack spacing={1}>
          <Toonie />
          <Text fontSize="xs">1$</Text>
        </VStack>
      </HStack>
    </>
  );
}

export default App;
