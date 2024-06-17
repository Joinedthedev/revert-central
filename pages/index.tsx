import {
  VStack,
  Heading,
  HStack,
  Text,
  Box,
  Button,
  Image,
  Icon,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon, ChatIcon } from "@chakra-ui/icons";
import { featureCards } from "@/data/data";
import PillarCard from "@/components/PillarCard";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Box w={"100%"} color={"green.400"}>
        <VStack align={"flex-start"}>
          <Box p={3} textAlign={"center"} justifyContent={"center"}>
            <Heading size={"4xl"}>
              {" "}
              All You Need To Know About Your New Home{" "}
            </Heading>
            <Text pt={2} as={"b"} fontSize={"xxl"} color={"green.600"}>
              Salaam! We call New muslims reverts because we believe everyone
              was born muslim. So, Welcome Back!
            </Text>
          </Box>
          <HStack
            p={3}
            w={"100%"}
            align={"center"}
            justifyContent={"space-between"}
          >
            <Box p={5} w={"600px"}>
              <Heading p={1} size={"2xl"}>
                {" "}
                What is Revert Central?
              </Heading>
              <Text p={1} fontSize={"lg"} color={"green.800"}>
                {" "}
                Revert Central is a platform specifically designed for reverts
                to islam that introduces you to your new home. Here, you'll join
                a community of reverts all around the world and learn
                foundational knowledge about the religion such the Pillars of
                Islam, The Pillars of Iman(Faith), and our beloved Prophet
                Muhammed, Peace and Blessings be upon him. You'll learn the
                basics of what it means to be a muslim.{" "}
              </Text>
              <Box ml={"auto"} pt={2}>
                <Link href={"/PillarsIslam"}>
                  <Button
                    rightIcon={<Icon as={ChevronRightIcon} />}
                    size={"md"}
                    bgColor={"green.400"}
                    _hover={{
                      bg: "green.300",
                    }}
                  >
                    {" "}
                    Get Started
                  </Button>
                </Link>
              </Box>
            </Box>

            <VStack pr={5}>
              <Image
                boxSize="300px"
                objectFit={"cover"}
                src="https://www.un.org/sites/un2.un.org/files/2021/02/unfss-community.jpg"
              ></Image>
              <Text fontSize={"lg"} color={"green.800"}>
                {" "}
                You're not alone! Join the discussion between thousands of
                reverts.
              </Text>
              <Link href={"/community"}>
                <Button
                  rightIcon={<Icon as={ChatIcon} />}
                  size={"md"}
                  bgColor={"green.400"}
                  _hover={{
                    bg: "green.300",
                  }}
                >
                  {" "}
                  Join Our Community
                </Button>
              </Link>
            </VStack>
          </HStack>
          <Flex borderRadius={5} p={5} bgColor={"green.200"}>
            <Text
              color={"green.800"}
              textAlign={"center"}
              as={"i"}
              my={4}
              fontSize={"4xl"}
            >
              {" "}
              ˹He is the One˺ Who created death and life in order to test which
              of you is best in deeds. And He is the Almighty, All-Forgiving.{" "}
              <Text fontSize={"xl"} textAlign={"right"}>
                -Quran 67:2
              </Text>
            </Text>
          </Flex>

          <Box w={"800px"} mr={"auto"} p={5}>
            <Heading size={"2xl"}> What is Islam ?</Heading>
            <Text fontSize={"lg"} color={"green.800"}>
              {" "}
              Simply put, Islam is a religon that revolves around the belief in
              one single indivisble God. He is Allah, The Most Merciful. Islam
              is more than just a religion, it is a way of life. There's lots to
              learn about this beautiful religion but lets start with the
              basics, shall we?
            </Text>
            <Box ml={"auto"} pt={2}>
              <Button
                rightIcon={<Icon as={ChevronRightIcon} />}
                size={"md"}
                bgColor={"green.400"}
                _hover={{
                  bg: "green.300",
                }}
              >
                {" "}
                Learn More
              </Button>
            </Box>
          </Box>
        </VStack>

        <VStack w={"100%"} justifyContent={"center"} align={"center"} p={3}>
          <Heading size={"2xl"}>Where to first?</Heading>
          <SimpleGrid p={3} spacing={40} columns={[4]}>
            {featureCards.map((card, index) => (
              <Box>
                <PillarCard
                  key={index}
                  title={card.title}
                  text={card.text}
                  imageSrc={card.imageSrc}
                  sendSomewhere={card.sendSomewhere}
                />
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>
    </>
  );
};

export default index;
