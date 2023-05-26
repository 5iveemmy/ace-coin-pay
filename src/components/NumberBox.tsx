import { Flex } from "@chakra-ui/react"

interface Props {
  num: number
}

const NumberBox = ({ num }: Props) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      borderRadius="4px"
      bgColor="#272727"
      color="white"
      width="22px"
      height="35px"
      fontSize="16px"
      fontWeight="500"
    >
      {num}
    </Flex>
  )
}

export default NumberBox
