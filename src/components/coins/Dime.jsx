import dimeImg from "@/assets/images/coins/dime.png"
import { Image } from "@chakra-ui/react"

export default function Dime({size=52, alt="10 cents coin"}) {
  return <Image src={dimeImg}  alt={alt} style={{ width: size, height: 'auto', display: 'block' }} />;
}