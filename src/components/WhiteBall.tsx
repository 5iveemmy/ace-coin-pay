import { Box, SystemStyleObject } from "@chakra-ui/react"

interface Props {
  sx: SystemStyleObject | undefined
}

const WhiteBall = ({ sx }: Props) => {
  return (
    <Box
      height="30px"
      width="30px"
      borderRadius="full"
      bgColor="white"
      position="absolute"
      sx={sx}
    />
  )
}

export default WhiteBall
