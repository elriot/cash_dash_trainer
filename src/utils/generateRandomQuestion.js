export const coins = [
  { name: "Nickel", value: 0.05 },
  { name: "Dime", value: 0.10 },
  { name: "Quarter", value: 0.25 },
  { name: "Loonie", value: 1.00 },
  { name: "Toonie", value: 2.00 },
];

export const bills = [
  { name: "FiveDollar", value: 5 },
  { name: "TenDollar", value: 10 },
  { name: "TwentyDollar", value: 20 },
  { name: "FiftyDollar", value: 50 },
  { name: "HundredDollar", value: 100 },
];

export default function generateRandomQuestion() {
  const numCoins = Math.floor(Math.random() * 3);
  const numBills = Math.floor(Math.random() * 2);

  const selectedCoins = [];
  for (let i = 0; i < numCoins; i++) {
    const coin = coins[Math.floor(Math.random() * coins.length)];
    const quantity = Math.ceil(Math.random() * 3);
    selectedCoins.push({ ...coin, quantity });
  }

  const selectedBills = [];
  for (let i = 0; i < numBills; i++) {
    const bill = bills[Math.floor(Math.random() * bills.length)];
    const quantity = Math.ceil(Math.random() * 2);
    selectedBills.push({ ...bill, quantity });
  }

  const total =
    selectedCoins.reduce((sum, c) => sum + c.value * c.quantity, 0) +
    selectedBills.reduce((sum, b) => sum + b.value * b.quantity, 0);

  return { coins: selectedCoins, bills: selectedBills, answer: total.toFixed(2) };
}