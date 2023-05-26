import CardDetails from "@/components/CardDetails"
import NumberBox from "@/components/NumberBox"
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react"
import {
  BsFillPenFill,
  VscVerifiedFilled,
  TbGridDots,
  IoMdClose,
  IoWallet,
} from "react-icons/all"
import masterCard from "../assets/masterCardLogo.png"

const PaymentPage = () => {
  return (
    <Container maxW="1100" px={{ base: "50px", lg: "0px" }}>
      <Flex
        pt="80px"
        flexDir={{ base: "column", lg: "row" }}
        gap="70px"
        justifyContent={{ base: "center", lg: "space-between" }}
        position="relative"
      >
        <Box position="absolute" top="1rem" right="-45px">
          <IoMdClose fontSize="25px" />
        </Box>
        <Box width={{ base: "full", lg: "65%" }}>
          <Flex justifyContent="space-between">
            <Flex gap="10px">
              <Flex
                justifyContent="center"
                alignItems="center"
                bgColor="#025efe"
                height="30px"
                width="30px"
                borderRadius="full"
              >
                <Box transform="rotate(-15deg)">
                  <IoWallet color="white" opacity="0.9" />
                </Box>
              </Flex>
              <Text fontSize="20px">
                <Text as="span" fontWeight="800">
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
          <Box pt="30px" pb="10px">
            <Flex justifyContent="space-between" alignItems="center">
              <Box>
                <Text fontWeight="700">Card Number</Text>
                <Text color="#000000" fontSize="12px" pt="5px" opacity="0.5">
                  Enter the 16 digit card number on the card
                </Text>
              </Box>
              <Flex gap="8px">
                <BsFillPenFill color="#025efe" />
                <Text color="#276cdc" fontSize="12px" fontWeight="600">
                  Edit
                </Text>
              </Flex>
            </Flex>
          </Box>
          <InputGroup mt="20px">
            <InputLeftAddon height="60px" bgColor="#f9fbfc" borderRight="none">
              <Image src={masterCard} height="15px" width="25px" />
            </InputLeftAddon>
            <Input
              placeholder="2412   -   7512   -   3412   -   3456"
              _placeholder={{ opacity: "0.5" }}
              bgColor="#f9fbfc"
              borderLeft="none"
              borderRight="none"
              borderColor="#f3f2f5"
              height="60px"
              _focusVisible={{ border: "none", boxShadow: "none" }}
            />
            <InputRightAddon height="60px" bgColor="#f9fbfc" borderLeft="none">
              <VscVerifiedFilled color="#00a1f0" fontSize="25px" />
            </InputRightAddon>
          </InputGroup>
          <Flex justifyContent="space-between" mt="40px" alignItems="center">
            <Box width="50%">
              <Text fontWeight="700">CVV Number</Text>
              <Text color="#000000" fontSize="10px" pt="5px" opacity="0.5">
                Enter the 3 or 4 digit number on the card
              </Text>
            </Box>
            <InputGroup width="50%">
              <Input
                placeholder="327"
                borderRight="none"
                bgColor="#f9fbfc"
                borderColor="#f3f2f5"
                height="60px"
                _focusVisible={{ border: "none", boxShadow: "none" }}
              />
              <InputRightAddon
                height="60px"
                bgColor="#f9fbfc"
                borderLeft="none"
              >
                <TbGridDots fontSize="25px" opacity="0.5" />
              </InputRightAddon>
            </InputGroup>
          </Flex>
          <Flex justifyContent="space-between" mt="40px" alignItems="center">
            <Box>
              <Text fontWeight="700">Expiry Date</Text>
              <Text color="#000000" fontSize="10px" pt="5px" opacity="0.5">
                Enter the expiration date of the card
              </Text>
            </Box>
            <Flex gap="10px" alignItems="center" width="50%">
              <Input
                placeholder="09"
                bgColor="#f9fbfc"
                borderColor="#f3f2f5"
                height="60px"
                _focusVisible={{ border: "none", boxShadow: "none" }}
              />
              /
              <Input
                placeholder="22"
                bgColor="#f9fbfc"
                borderColor="#f3f2f5"
                height="60px"
                _focusVisible={{ border: "none", boxShadow: "none" }}
              />
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" mt="40px" alignItems="center">
            <Box width="50%">
              <Text fontWeight="700">Password</Text>
              <Text color="#000000" fontSize="10px" pt="5px" opacity="0.5">
                Enter your Dynamic password
              </Text>
            </Box>
            <InputGroup width="50%">
              <Input
                placeholder="327"
                bgColor="#f9fbfc"
                borderColor="#f3f2f5"
                height="60px"
                borderRight="none"
                _focusVisible={{ border: "none", boxShadow: "none" }}
              />
              <InputRightAddon
                height="60px"
                bgColor="#f9fbfc"
                borderLeft="none"
              >
                <TbGridDots fontSize="25px" opacity="0.5" />
              </InputRightAddon>
            </InputGroup>
          </Flex>
          <Button
            bgColor="#025efe"
            color="white"
            width="100%"
            mt="50px"
            borderRadius="8px"
            _hover={{ opacity: "0.8" }}
            height="70px"
          >
            Pay Now
          </Button>
        </Box>
        <CardDetails />
      </Flex>
    </Container>
  )
}

export default PaymentPage
