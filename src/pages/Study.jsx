import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import Nickel from "../components/coins/Nickel";
import Dime from "../components/coins/Dime";
import Loonie from "../components/coins/Loonie";
import Toonie from "../components/coins/Toonie";
import generateRandomQuestion from "@/utils/generateRandomQuestion";
import FiveDollarsBill from "../components/bills/FiveDollarsBill";
import TenDollarsBill from "@/components/bills/TenDollarsBill";
import TwentyDollarsBill from "@/components/bills/TwentyDollarsBill";
import FiftyDollarsBill from "@/components/bills/FiftyDollarsBill";
import HundredDollarsBill from "@/components/bills/HundredDollarsBill";
import Pile from "@/components/Pile";
import { COIN_SIZE, BILL_SIZE } from "@/constants/denominations";

const CoinComp = { Nickel, Dime, Loonie, Toonie };
const BillComp = {
  FiveDollar: FiveDollarsBill,
  TenDollar: TenDollarsBill,
  TwentyDollar: TwentyDollarsBill,
  FiftyDollar: FiftyDollarsBill,
  HundredDollar: HundredDollarsBill,
};

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
const CANVAS_W = 340;
const CANVAS_H = 240;

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  return (
    <VStack spacing={4}>
      <Text fontSize="xl">💵 How much is this?</Text>

			<Box
				position="relative"
				w={`${CANVAS_W}px`}
				h={`${CANVAS_H}px`}
				bg="gray.50"
				borderRadius="lg"
				overflow="hidden"      // ← 추가
				border="1px dashed"
				borderColor="gray.300"
			>
				{question.coins.map((c, idx) => {
					const C = CoinComp[c.name];
					const size = COIN_SIZE[c.name]; // ← 고정
					const x = 20 + (idx % 3) * 100;
					const y = 20 + Math.floor(idx / 3) * 100;
					return <Pile key={`coin-${idx}`} Component={C} qty={c.quantity} x={x} y={y} size={size} />;
				})}

				{question.bills.map((b, idx) => {
					const B = BillComp[b.name];
					const size = BILL_SIZE[b.name]; // ← 고정
					return <Pile key={`bill-${idx}`} Component={B} qty={b.quantity} x={220} y={20 + idx * 90} size={size} />;
				})}
      </Box>

      <Input
        placeholder="Enter total amount (e.g., 5.75)"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <Button colorScheme="teal" onClick={checkAnswer}>
        Submit
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setQuestion(generateRandomQuestion());
          setUserAnswer("");
          setFeedback("");
        }}
      >
        Next Question
      </Button>
      {feedback && <Text>{feedback}</Text>}
      <Box fontSize="sm" color="gray.600">
        <pre>{JSON.stringify(question, null, 2)}</pre>
      </Box>
    </VStack>
  );
}
