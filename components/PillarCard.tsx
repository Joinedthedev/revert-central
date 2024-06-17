import React from "react";
import { Box, Image, VStack, Text } from "@chakra-ui/react";
import Link from "next/link";

type PillarCardProps = {
  title: string,
  imageSrc: string;
  text: string;
  sendSomewhere: string;
};
const PillarCard = ({ imageSrc, text, sendSomewhere, title }: PillarCardProps) => {
  return (
    <Link href={sendSomewhere}>
      <VStack width={"200px"} align={"center"} >
        <Text textAlign={"center"} color={"green.800"} fontSize={"lg"}>{title}</Text>
        <Box width={"150px"} borderRadius={5} border={"5px"} borderStyle={"solid"} borderColor={"green.300"}>
          <Image src={imageSrc} boxSize={"150px"} objectFit={"cover"} />
        </Box>
        <Text textAlign={"center"} fontSize={"sm"}color={"green.800"}>{text}</Text>
      </VStack>
    </Link>
  );
};

export default PillarCard;
