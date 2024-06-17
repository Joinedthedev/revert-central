import {
  HStack,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import PillarCard from "@/components/PillarCard";

import { pillarsOfIman } from "@/data/data";

const PillarsofIman = () => {
  return (
    <>
      <VStack align={"center"} spacing={7}>
        <Heading py={5} color={"green.400"} size={"4xl"}>
          {" "}
          What are the Pillars of Iman?
        </Heading>
        <Text textAlign={"center"} p={3} color={"green.800"} fontSize={"xl"}>
          Islam bears Six Pillars of Faith, known as Arkan al-Iman. Belief in
          them brings us closer to Allah (SWT). The way we manifest our faith is
          through worship, and the Six Pillars of Faith are the foundation that
          keeps the believer rooted in acts of worship.
        </Text>
      </VStack>
      <Flex borderRadius={5} my={8} bgColor={"green.200"}>
        <Text
          color={"green.800"}
          textAlign={"center"}
          as={"i"}
          my={4}
          fontSize={"4xl"}
        >
          "Eman means that you believe in Allah, in His Angels, in His Books, in
          His Messengers, in the Day of Judgment and in the Divine Decree (Qadr)
          in its good and evil."
          <Text fontSize={"xl"} textAlign={"right"}>
            Prophet Muhammed (SAW) [Sahih Muslim]
          </Text>
        </Text>
      </Flex>
      <VStack w={"100%"} justifyContent={"center"} align={"center"} p={3}>
        <Heading color={"green.400"} size={"2xl"}>
          Pillars of Iman
        </Heading>
        <SimpleGrid
          justifyContent={"center"}
          alignItems={"center"}
          p={3}
          spacing={20}
          columns={[3]}
        >
          {pillarsOfIman.map((card, index) => (
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
      <Box w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Belief in Allah
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          This pillar of Eman includes belief in Allah's existence, His
          Names/Attributes, His Lordship and His right to be worshiped alone. So
          it concerns the concept of Tawheed (Unity of Allah). A person must
          accept everything from Allah to be able to fulfill this pillar of
          Faith. The knowledge about Allah comes directly from the Quran and
          Sunnah.{" "}
        </Text>
      </Box>
      <Box w={"800px"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Belief in Angels{" "}
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          The Angels are a creation of Allah, made from light, who worship Him.
          They differ from humans and jinn in that they have no free will. Their
          job is to obey Allah in every command. That's what they were created
          for by Allah. Belief in the Angels includes belief in their existence,
          in their attributes, made known Angels (Jibreel and Mikael etc.) and
          the deeds they perform of which we have been informed.
        </Text>
        <Box margin={7}></Box>

        <Flex
          borderColor={"green.500"}
          border={"solid 2px"}
          borderRadius={5}
          p={5}
          bgColor={"green.200"}
        >
          <Text
            color={"green.800"}
            textAlign={"center"}
            as={"i"}
            my={4}
            fontSize={"xl"}
          >
            "Verily! It was We who sent down the Reminder (the Qur'an), so We
            also will watch over it (as to changes, twists, additions, or
            omissions)."
            <Text fontSize={"lg"} textAlign={"right"}>
              -(15:9 Quran)
            </Text>
          </Text>
        </Flex>
      </Box>
      <Box w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Belief in Books(Scripture)
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          This is a pillar that distinguishes Islam from other religions. This
          is because Judaism and Christianity do not believe that 'Isah (Jesus)
          is a Messenger of Allah. The Christians believe that Jesus is a son of
          God. Islam opposes that belief by believing Jesus is a Prophet of God.
          He want sent to the Children of Israel (Benu Israel) to proclaim the
          belief and worship of God alone. Muslims believe in all the Messengers
          of Allah. So in Islam it is an obligation to believe in all
          Messengers. Leaving off any Prophet or Messenger constitutes to
          disbelief in Islam.
        </Text>
      </Box>
      <Box w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Belief in The Last Day
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          It is also a pillar of Eman to believe in the Day of Resurrection(also
          known as The Last Day or Day of Judgement). In Islam, Muslims believe
          that everyone is called to account for what he or she has done on
          earth. They believe in the punishment of Hell for those whom Allah is
          not pleased with, and Paradise for those whom Allah is pleased with.
          The Day of Judgement is true and we will all be reckoned for our
          deeds. A Muslim must believe in all the events that will take place on
          that Day.
        </Text>

        <Flex
          borderColor={"green.500"}
          border={"solid 2px"}
          borderRadius={5}
          p={5}
          bgColor={"green.200"}
        >
          <Text
            color={"green.800"}
            textAlign={"center"}
            as={"i"}
            my={4}
            fontSize={"xl"}
          >
            (O Muhammad), say: "Shall we inform you of the greatest losers in
            regard to the deeds?" These are those whose deeds were nullified
            during worldly life, thinking that their deeds would bring rewards.
            Those are the ones who deny the Signs of their Lord and the meeting
            with Him. So their works are in vain and on the Day of Resurrection
            We will give no weight to their deeds.
            <Text fontSize={"lg"} textAlign={"right"}>
              -(Surah Kahf verse 103-105)
            </Text>
          </Text>
        </Flex>
      </Box>
      <Box w={"800px"} mr={"auto"} p={5}>
        <Text>
          {" "}
          The belief in Scale (Al-Mizan) is also part of this pillar. The deeds
          of the people are placed on a Scale. When the good deeds outweigh the
          bad deeds, then he is the winner.
        </Text>
        <Box m={7}></Box>
        <Flex
          my={3}
          borderColor={"green.500"}
          border={"solid 2px"}
          borderRadius={5}
          p={5}
          bgColor={"green.200"}
        >
          <Text
            color={"green.800"}
            textAlign={"center"}
            as={"i"}
            my={4}
            fontSize={"xl"}
          >
            {" "}
            And the weighing (of the deeds) on the Day (of the Reckoning) will
            indicate the actual (balance). The (true) victors are those whose
            scales (with hasanat) weigh more heavily.
            <Text fontSize={"lg"} textAlign={"right"}>
              - (7:8 Quran)
            </Text>
          </Text>
        </Flex>

        <Box py={5}>
            <Heading pb={4} color={"green.400"} size={"2xl"}>
              {" "}
              Belief in the Messengers
            </Heading>
            <Text fontSize={"lg"} color={"green.800"}>
              {" "}
              This is a pillar that distinguishes Islam from other religions. This
              is because Judaism and Christianity do not believe that 'Isah (Jesus)
              is a Messenger of Allah. The Christians believe that Jesus is a son of
              God. Islam opposes that belief by believing Jesus is a Prophet of God.
              He want sent to the Children of Israel (Benu Israel) to proclaim the
              belief and worship of God alone. Muslims believe in all the Messengers
              of Allah. So in Islam it is an obligation to believe in all
              Messengers. Leaving off any Prophet or Messenger constitutes to
              disbelief in Islam.
            </Text>
        </Box>

        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Belief in Destiny (Qadr)
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          The sixth pillar of Eman is to believe in Destiny. Everything we do is
          already written. Destiny is also known as Al-Qadr. It means that Allah
          Knows of what is yet to come. Thus, Muslims believe that Allah Knows
          what will happen in the future. That means He Knows what our plans and
          actions will be without it having to be passed. Al-Qadr consists of
          bad and good. There are good and bad moments that will happen in the
          future. A Muslim believes that Allah is Aware of all the good and bad
          that will happen. To deny Qadr is disbelief. For that would mean Allah
          is unaware of what is yet to come. But Allah knows everything and
          nothing escapes His Knowledge.
        </Text>
        <Flex
          my={3}
          borderColor={"green.500"}
          border={"solid 2px"}
          borderRadius={5}
          p={5}
          bgColor={"green.200"}
        >
          <Text
            color={"green.800"}
            textAlign={"center"}
            as={"i"}
            my={4}
            fontSize={"xl"}
          >
            "Allah Wrote the Destiny of creation fifty thousand years before He
            Created the heavens and the earth. And His Throne was over the
            water."
            <Text fontSize={"lg"} textAlign={"right"}>
              -(Prophet Mohammed(PBUH)) [Sahih al-Bukhari 7439]
            </Text>
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default PillarsofIman;
