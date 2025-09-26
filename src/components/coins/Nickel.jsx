import nickleImg from "@/assets/images/coins/nickle.png"
import { Image } from "@chakra-ui/react"

export default function Nickle({size=64, alt="5 cents coin"}) {
  return <Image src={nickleImg} alt={alt} style={{ width: size, height: 'auto', display: 'block' }} />;
}
