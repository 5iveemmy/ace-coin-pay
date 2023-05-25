import { Box, Flex, Image, Text } from "@chakra-ui/react"
import receipt from "../assets/receipt.png"

const CardDetails = () => {
  return (
    <Box width="40%">
      <Box borderRadius="20px" bgColor="#e7ecee" px="30px">
        <Box pt="40px">
          <Flex justifyContent="space-between">
            <Text opacity="0.5">Company</Text>
            <Text fontWeight="bold">Apple</Text>
          </Flex>
          <Flex justifyContent="space-between" pt="10px">
            <Text opacity="0.5">Order Number</Text>
            <Text fontWeight="bold">1266201</Text>
          </Flex>
          <Flex justifyContent="space-between" pt="10px">
            <Text opacity="0.5">Product</Text>
            <Text fontWeight="bold">MacBook Air</Text>
          </Flex>
          <Flex justifyContent="space-between" pt="10px">
            <Text opacity="0.5">Vat(20%)</Text>
            <Text fontWeight="bold">$100.00</Text>
          </Flex>
        </Box>
      </Box>
      <Box
        bg="radial-gradient(circle at top left,transparent 1vw, #e7ecee 0.9vw)"
        p="30px"
        borderBottomRadius="20px"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text opacity="0.5">You have to Pay</Text>
            <Flex alignItems="baseline">
              <Text fontWeight="800" fontSize="25px">
                549
              </Text>
              <Text>.99 USD</Text>
            </Flex>
          </Box>
          <Image
            src={receipt}
            height="25px"
            width="25px"
            transform="rotate(180deg)"
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default CardDetails
