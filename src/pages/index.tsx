import { Flex, Heading, Text } from "@chakra-ui/react"
import Head from 'next/head'
import DarkModeSwitch from './../components/layout/DarkModeSwitcher/index'

const Home = () => {
  return (
    <>
      <Flex
        alignItems='center'
        justifyContent='center'
        h='100vh'
      >
        <DarkModeSwitch />
      </Flex>
    </>
  )

}

export default Home