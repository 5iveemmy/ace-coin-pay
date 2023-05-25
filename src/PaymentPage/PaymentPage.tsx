import { Box, Flex, Text } from "@chakra-ui/react"

const PaymentPage = () => {
  return (
    <Box pt="80px" px="70px">
      <Flex width="500px" justifyContent="space-between">
        <Flex>
          <Text fontSize="20px">
            <Text as="span" fontWeight="800">
              {" "}
              AceCoin
            </Text>
            Pay
          </Text>
        </Flex>
        <Flex>
          <Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              borderRadius="4px"
              bgColor="black"
              color="white"
              width="20px"
              height="35px"
              fontSize="16px"
              fontWeight="500"
            >
              1
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PaymentPage
