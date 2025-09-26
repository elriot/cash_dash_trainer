import quaterImg from "@/assets/images/coins/quater.png"
import { Image } from "@chakra-ui/react"

export default function Quater({size=72, alt="25 cents coin"}) {
  return <Image src={quaterImg} alt={alt} style={{ width: size, height: 'auto', display: 'block' }} />;
}