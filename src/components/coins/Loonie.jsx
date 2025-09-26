import loonieImg from "@/assets/images/coins/loonie.png"
import { Image } from "@chakra-ui/react"

export default function Loonie({size=80, alt="1 dollar coin"}) {
	return <Image src={loonieImg}  alt={alt} style={{ width: size, height: 'auto', display: 'block' }} />;
}