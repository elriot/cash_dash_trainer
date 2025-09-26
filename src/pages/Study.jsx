import { useState } from "react";
import { Box, Button, Input, VStack, HStack, Text } from "@chakra-ui/react";
import Nickel from "../components/coins/Nickel";
import Dime from "../components/coins/Dime";
import Loonie from "../components/coins/Loonie";
import Toonie from "../components/coins/Toonie";
import FiveDollar from "../components/bills/FiveDollarsBill";
import generateRandomQuestion from "@/utils/generateRandomQuestion";
import FiveDollarsBill from "../components/bills/FiveDollarsBill";
import TenDollarsBill from "@/components/bills/TenDollarsBill";
import TwentyDollarsBill from "@/components/bills/TwentyDollarsBill";
import FiftyDollarsBill from "@/components/bills/FiftyDollarsBill";
import HundredDollarsBill from "@/components/bills/HundredDollarsBill";

export default function Study() {
  const [question, setQuestion] = useState(generateRandomQuestion());
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (parseFloat(userAnswer) === parseFloat(question.answer)) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(`❌ Wrong! The answer is $${question.answer}`);
    }
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="xl">💵 How much is this?</Text>
      <HStack>
        {question.coins.map((c, idx) => (
          <Box key={idx}>
            {[...Array(c.quantity)].map((_, i) => (
              <Box key={i}>
                {c.name === "Nickel" && <Nickel />}
                {c.name === "Dime" && <Dime />}
                {c.name === "Loonie" && <Loonie />}
                {c.name === "Toonie" && <Toonie />}
              </Box>
            ))}
          </Box>
        ))}
        {question.bills.map((b, idx) => (
          <Box key={idx}>
            {[...Array(b.quantity)].map((_, i) => (
              <Box key={i}>
                {b.name === "FiveDollar" && <FiveDollarsBill />}
								{b.name === "TenDollar" && <TenDollarsBill />}
								{b.name === "TwentyDollar" && <TwentyDollarsBill />}
								{b.name === "FiftyDollar" && <FiftyDollarsBill />}
								{b.name === "HundredDollar" && <HundredDollarsBill />}
              </Box>
            ))}
          </Box>
        ))}
      </HStack>

      <Input
        placeholder="Enter total amount (e.g., 5.75)"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <Button colorScheme="teal" onClick={checkAnswer}>
        Submit
      </Button>
      <Button variant="outline" onClick={() => {
        setQuestion(generateRandomQuestion());
        setUserAnswer("");
        setFeedback("");
      }}>
        Next Question
      </Button>
      {feedback && <Text>{feedback}</Text>}
    </VStack>
  );
}