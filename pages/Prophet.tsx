import React from "react";

import {
  HStack,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { BsBoxArrowInDownLeft } from "react-icons/bs";

const Prophet = () => {
  return (
    <>
      <VStack align={"center"} spacing={7}>
        <Heading textAlign={"center"} py={5} color={"green.400"} size={"4xl"}>
          {" "}
          Quick! Google the greatest man in history! Surprised?
        </Heading>
        <Text as={"b"} textAlign={"center"} color={"green.800"} fontSize={"lg"}>
          Prophet Mohammed, Peace Be Upon Him(PBUH) is largely regarded as the
          greatest man in history
        </Text>
      </VStack>

      <Box mt={5} w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Who is Muhammed(PBUH)?
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          Prophet Muhammed(PBUH) is the final messenger of Allah. Albeit the
          concept of being a muslim existed before the inception of Islam, Islam
          itself began in Mecca, 610 A.D when Muḥammad ibn ʿAbd Allāh ibn ʿAbd
          al-Muṭṭalib, otherwise known as, Prophet Muhammed(PBUH) received
          divine revelation from Allah through his Angel Gabriel in a cave where
          he frequently liked to meditate. Deeply distressed by the strange
          occurrence, he retreated back home to his wife, Khadijah bint
          Khuwaylid(May Allah be pleased with her), who comforted him and
          advised him. She became the first follower of Islam. Throughout the
          rest of his life Prophet Muhammed(PBUH) would preach the message of
          Islam to anyone who would listen. Before his death he managed to
          create a massive following who would continue to spread the message
          even after he passed away.{" "}
        </Text>
        <Box m={7}></Box>
        <Text>
          {" "}
          Prophet Muhammed(PBUH) was known to be kind, gentle, truthful, wise
          and compassionate. He was the best amongst his people and the best
          amongst mankind.
        </Text>
      </Box>

      <Box mt={5} w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Why is he important?
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          Prophet Muhammed(PBUH) is what every muslim should strive to be in
          mannerisms, faith, and way of life. We follow his example by hadith
          and sunnah.{" "}
        </Text>
      </Box>

      <Box mt={5} w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Hadith
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          Hadith refers to the collection of sayings, actions, and approvals of
          the Prophet Muhammad, which were memorized and transmitted by his
          companions and later compiled by scholars of Islam. These narrations
          provide valuable insights into the Prophet's life, his character, and
          his teachings on various aspects of Islamic faith and practice. The
          authenticity of each hadith is determined by a rigorous process of
          verification, which takes into account the reliability of the
          narrators and the chain of transmission. The most authentic and widely
          accepted collections of hadith are known as Sahih Bukhari and Sahih
          Muslim, which are considered the most authoritative sources of hadith
          after the Quran.
        </Text>
      </Box>

      <Box mt={5} w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Sunnah
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          Sunnah, on the other hand, refers to the way of life and practices of
          the Prophet Muhammad, which includes his words, actions, and silent
          approvals. It encompasses not only the hadith but also the Prophet's
          personal habits, manners, and behaviors in various situations. The
          Sunnah serves as a model and guide for Muslims in their daily lives,
          as it demonstrates how to implement the teachings of the Quran in
          practical terms. Following the Sunnah is considered an essential part
          of Islamic faith and practice, as it helps Muslims to emulate the
          example set by the Prophet Muhammad and to live their lives in
          accordance with the principles of Islam. The Sunnah covers a wide
          range of topics, including prayer, fasting, charity, social
          interactions, and personal hygiene, among others. It is through the
          combination of the Quran and the Sunnah that Muslims seek to
          understand and apply the complete message of Islam in their lives.
        </Text>
      </Box>
    </>
  );
};

export default Prophet;
