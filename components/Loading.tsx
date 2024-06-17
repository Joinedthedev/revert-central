import React from 'react'
import { Spinner } from '@chakra-ui/react'
const Loading = () => {
  return (
    <Spinner
    thickness='4px'
    speed='0.65s'
    emptyColor='gray.200'
    color='green.500'
    size='400px'
  />
  )
}

export default Loading