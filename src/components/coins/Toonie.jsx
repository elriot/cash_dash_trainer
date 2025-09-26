import toonieImg from "@/assets/images/coins/toonie.png"
import { Image } from "@chakra-ui/react"

export default function Toonie({ size = 84, alt = "2 dollars coin" }) {
  return <Image src={toonieImg} alt={alt} style={{ width: size, height: 'auto', display: 'block' }} />;
}