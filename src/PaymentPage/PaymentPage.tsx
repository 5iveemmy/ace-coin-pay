import NumberBox from "@/components/NumberBox"
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Text,
} from "@chakra-ui/react"
import { BsFillPenFill, VscVerifiedFilled, TbGridDots } from "react-icons/all"
import masterCard from "../assets/masterCardLogo.png"

const PaymentPage = () => {
  return (
    <Box pt="80px" px="70px" width="700px">
      <Flex justifyContent="space-between">
        <Flex gap="10px">
          <Box
            bgColor="#025efe"
            height="30px"
            width="30px"
            borderRadius="full"
          />
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
      <Box pt="30px">
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
        <InputLeftAddon height="50px" bgColor="#f9fbfc" borderRight="none">
          <Image src={masterCard} height="15px" width="25px" />
        </InputLeftAddon>
        <Input
          placeholder="2412   -   7512   -   3412   -   3456"
          _placeholder={{ opacity: "0.5" }}
          // _focusVisible={{
          //   borderTop: "2px solid#2c66c1",
          //   borderBottom: "2px solid#2c66c1",
          // }}
          bgColor="#f9fbfc"
          borderLeft="none"
          borderRight="none"
          borderColor="#f3f2f5"
          height="50px"
          _focusVisible={{ border: "none", boxShadow: "none" }}
        />
        <InputRightAddon height="50px" bgColor="#f9fbfc" borderLeft="none">
          <VscVerifiedFilled color="#00a1f0" fontSize="25px" />
        </InputRightAddon>
      </InputGroup>
      <Flex justifyContent="space-between" mt="30px" alignItems="center">
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
            height="50px"
            _focusVisible={{ border: "none", boxShadow: "none" }}
          />
          <InputRightAddon height="50px" bgColor="#f9fbfc" borderLeft="none">
            <TbGridDots fontSize="25px" opacity="0.5" />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <Flex justifyContent="space-between" mt="30px" alignItems="center">
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
            height="50px"
            _focusVisible={{ border: "none", boxShadow: "none" }}
          />
          /
          <Input
            placeholder="22"
            bgColor="#f9fbfc"
            borderColor="#f3f2f5"
            height="50px"
            _focusVisible={{ border: "none", boxShadow: "none" }}
          />
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" mt="30px" alignItems="center">
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
            height="50px"
            borderRight="none"
            _focusVisible={{ border: "none", boxShadow: "none" }}
          />
          <InputRightAddon height="50px" bgColor="#f9fbfc" borderLeft="none">
            <TbGridDots fontSize="25px" opacity="0.5" />
          </InputRightAddon>
        </InputGroup>
      </Flex>
      <Button
        bgColor="#025efe"
        color="white"
        width="100%"
        mt="40px"
        borderRadius="8px"
        _hover={{ opacity: "0.8" }}
        height="60px"
      >
        Pay Now
      </Button>
    </Box>
  )
}

export default PaymentPage
