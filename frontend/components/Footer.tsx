'use client';
import { Center, Flex, Text } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Flex
        justifyContent="center"
        alignItems="Center"
        p="2rem"
    >
        <Text>All right reserved &copy; Davo {new Date().getFullYear()}</Text>

    </Flex>
  )
}

export default Footer;