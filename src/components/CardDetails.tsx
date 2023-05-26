import { Box, Flex, Image, Text } from "@chakra-ui/react"
import receipt from "../assets/receipt.png"
import masterCard from "../assets/masterCardLogo.png"
import chip from "../assets/chip.png"
import { RiWifiFill, TbBrandApple, RxBorderDotted } from "react-icons/all"
import WhiteBall from "./WhiteBall"

const CardDetails = () => {
  return (
    <Box width="30%">
      <Flex
        pt="40px"
        pb="10px"
        justifyContent="space-between"
        bgColor="white"
        width="260px"
        m="0 auto"
        borderTopRadius="20px"
        boxShadow="-1px -16px 20px 20px #f6f6f6"
        px="30px"
      >
        <Image
          src={chip}
          height="40px"
          width="40px"
          transform="rotate(90deg)"
        />
        <RiWifiFill fontSize="30px" />
      </Flex>
      <Box borderTopRadius="20px" bgColor="#e7ecee" px="30px" pb="20px">
        <Box
          bgColor="white"
          borderBottomRadius="20px"
          p="30px"
          pt="80px"
          boxShadow="1px 20px 20px 0px #e4e4e4"
        >
          <Box>
            <Text fontSize="16px">Jonathan Michael</Text>
            <Flex alignItems="center" gap="10px">
              <RxBorderDotted fontSize="50px" />
              <Text fontWeight="700" fontSize="20px">
                3456
              </Text>
            </Flex>
          </Box>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontWeight="500">09/22</Text>
            <Flex flexDir="column" alignItems="center" gap="4px" pt="30px">
              <Image src={masterCard} height="30px" width="50px" />
              <Text as="span" fontSize="8px">
                mastercard
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box pt="30px">
          <Flex justifyContent="space-between">
            <Text opacity="0.5">Company</Text>
            <Flex alignItems="center" gap="4px">
              <TbBrandApple />
              <Text fontWeight="bold">Apple</Text>
            </Flex>
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
        bg=" #e7ecee"
        px="30px"
        py="20px"
        borderBottomRadius="20px"
        position="relative"
        borderTop="2px solid #b3b3b3"
        borderTopStyle="dashed"
      >
        <WhiteBall
          sx={{
            top: "-15px",
            left: "-15px",
          }}
        />
        <WhiteBall
          sx={{
            top: "-15px",
            right: "-15px",
          }}
        />
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
