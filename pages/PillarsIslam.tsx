import {
  HStack,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import React from "react";
import PillarCard from "@/components/PillarCard";

import { pillarsOfIslam } from "@/data/data";

const PillarsIslam = () => {
  return (
    <>
      <VStack align={"center"} spacing={5}>
        <Heading pt={5} color={"green.400"} size={"4xl"}>
          {" "}
          What are the Pillars of Islam?
        </Heading>
        <Text textAlign={"center"} p={3} color={"green.800"} fontSize={"xl"}>
          These are the foundation of Muslim life and Muslims are required to
          observe them with utmost devotion. Just like a building lacks
          stability without strong pillars, a believer’s relationship with God
          lacks focus without observance of the five pillars. These pillars form
          the foundation and starting point for all other good deeds and acts of
          worship to God.
        </Text>
      </VStack>

      <VStack w={"100%"} justifyContent={"center"} align={"center"} p={3}>
        <Heading color={"green.400"} size={"2xl"}>
          Pillars of Islam
        </Heading>
        <SimpleGrid p={3} spacing={20} columns={[5]}>
          {pillarsOfIslam.map((card, index) => (
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
          Shahda& Faith(Iman)
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          “There is none worthy of worship except God (Allah) and Muhammad
          (pbuh) is the messenger of God.” This declaration of faith is called
          the Shahadah, a simple formula that all the faithful pronounce. The
          significance of this declaration is the belief that the only purpose
          of life is to serve and obey God, and this is achieved through the
          teachings and practices of the Last Prophet, Muhammad (pbuh).
        </Text>
      </Box>

      <Box w={"800px"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Prayer(Salah){" "}
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          Prayer is the name for the obligatory prayers that are performed five
          times a day, and are a direct link between the worshipper and God.
          There is no hierarchical authority in Islam and there are no priests.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          Prayers are led by a learned person who knows the Quran and is
          generally chosen by the congregation. Prayers are said at dawn,
          mid-day, late-afternoon, sunset and nightfall, and thus determine the
          rhythm of the entire day.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          These five prescribed prayers contain verses from the Quran, and are
          said in Arabic, the language of the Revelation. Personal
          supplications, however, can be offered in one’s own language and at
          any time. Although it is preferable to worship together in a mosque, a
          Muslim may pray almost anywhere, such as in fields, offices, factories
          and universities. Oftentimes visitors to the Muslim world are struck
          by the centrality of prayers in daily life.
        </Text>
      </Box>

      <Box w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Zakah(Charity)
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          An important principle of Islam is that everything belongs to God, and
          that wealth is therefore held by human beings in trust. The word zakah
          means both “purification” and “growth.” Our possessions are purified
          by setting aside a proportion for those in need and for the society in
          general. Like the pruning of plants, this cutting back balances and
          encourages new growth.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          Each Muslim calculates his or her own obligatory charity individually.
          This involves the annual payment of 2.5% of one’s capital, excluding
          such items as primary residence, car and professional tools. An
          individual may also give as much as he or she pleases as voluntary
          charity, and does so preferably in secret. Such charity is not limited
          to financial giving.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          The Prophet said, “Even meeting your brother with a cheerful face is
          an act of charity.” The Prophet also said: “Charity is a necessity for
          every Muslim.” He was asked: “What if a person has nothing?” The
          Prophet replied: “He should work with his own hands for his benefit
          and then give something out of such earnings in charity.” The
          Companions of the Prophet asked: “What if he is not able to work?” The
          Prophet said: “He should help the poor and needy.” The Companions
          further asked: “What if he cannot do even that?” The Prophet said: “He
          should urge others to do good.” The Companions said: “What if he lacks
          that also?” The Prophet said: “He should check himself from doing
          evil. That is also an act of charity.”
        </Text>
      </Box>

      <Box w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Fasting(Sawm)
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          Every year in the month of Ramada-n, all Muslims fast from dawn until
          sundown–abstaining from food, drink, and sexual relations with their
          spouses. Those who are sick, elderly, or on a journey, and women who
          are menstruating, pregnant or nursing, are permitted to break the fast
          and make up an equal number of days later in the year if they are
          healthy and able. Children begin to fast (and to observe prayers) from
          puberty, although many start earlier.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          Although fasting is beneficial to health, it is mainly a method of
          self-purification and self-restraint. By cutting oneself from worldly
          comforts, even for a short time, a fasting person focuses on his or
          her purpose in life by constantly being aware of the presence of God.
          God states in the Quran: “O you who believe! Fasting is prescribed for
          you as it was prescribed to those before you that you may learn
          self-restraint.” (Quran 2:183)
        </Text>
      </Box>

      <Box w={"800px"} mr={"auto"} p={5}>
        <Heading pb={4} color={"green.400"} size={"2xl"}>
          {" "}
          Pilgrimage (Hajj)
        </Heading>
        <Text fontSize={"lg"} color={"green.800"}>
          {" "}
          The pilgrimage to Mecca (Hajj) is an obligation only for those who are
          physically and financially able to do so. Nevertheless, over two
          million people go to Makkah each year from every corner of the globe
          providing a unique opportunity for those of different nations to meet
          one another. The annual Hajj begins in the twelfth month of the
          Islamic lunar year. Pilgrims wear special clothes: simple garments
          that strip away distinctions of class and culture, so that all stand
          equal before God.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          The rites of Hajj, which are of Abrahamic origin, include going around
          the Kaaba seven times, and going seven times between the hills of Safa
          and Marwa as did Hagar (Hajira, Abraham’s wife) during her search for
          water. The pilgrims later stand together on the wide plains of Arafat
          (a large expanse of desert outside Mecca) and join in prayer for God’s
          forgiveness, in what is often thought as a preview of the Day of
          Judgment.
        </Text>
        <Box margin={7}></Box>
        <Text fontSize={"lg"}>
          The close of Hajj is marked by a festival, the Eid al Adha, which is
          celebrated with prayers and the exchange of gifts in Muslim
          communities everywhere. This and Eid al Fitr, a festive day
          celebrating the end of Ramadan, are the two holidays of the Islamic
          calendar.
        </Text>
      </Box>
    </>
  );
};

export default PillarsIslam;
