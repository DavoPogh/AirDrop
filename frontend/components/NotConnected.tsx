'use client';
import { Alert, AlertIcon } from "@chakra-ui/react";

const NotConnected = () => {
  return (
    <Alert status='warning'>
        <AlertIcon />
        Please Connect your Wallet.
    </Alert>
  )
}

export default NotConnected