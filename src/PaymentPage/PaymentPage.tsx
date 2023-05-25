import NumberBox from "@/components/NumberBox"
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
        <Flex gap="2px" alignItems="center" justifyContent="center">
          <Flex gap="2px">
            <NumberBox num={0} />
            <NumberBox num={1} />
          </Flex>
          :
          <Flex gap="2px">
            <NumberBox num={1} />
            <NumberBox num={9} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default PaymentPage
