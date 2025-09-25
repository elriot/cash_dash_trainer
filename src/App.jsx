import './App.css'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <p>dfd</p>
			<Button as={Link} to="/study" colorScheme="teal" variant="solid">Study</Button>
    </>
  )
}

export default App
