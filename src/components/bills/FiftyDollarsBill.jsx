import img from "@/assets/images/bills/fifty_bill.png"
import { Image } from "@chakra-ui/react"

export default function FiftyDollarsBill({size=160, alt="50 dollars bill"}) {
  return <Image src={img} alt={alt} style={{ width: size, height: 'auto', display: 'block' }} />;
}

