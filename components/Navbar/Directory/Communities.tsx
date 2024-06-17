import React, { useState } from "react";
import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

import { GrAdd } from "react-icons/gr";
import { useRecoilValue } from "recoil";
import { auth } from "@/firebase/clientApp";
import { communityState } from "@/atoms/communitiesAtom";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";
import { IoAccessibilityOutline } from "react-icons/io5";
import MenuListItem from "./MenuListItem";

type CommunitiesProps = {
  menuOpen: boolean;
};

const Communities: React.FC<CommunitiesProps> = ({ menuOpen }) => {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(true);
  const mySnippets = useRecoilValue(communityState).mySnippets;

  return (
    <>
      <CreateCommunityModal
        isOpen={true}
        handleClose={() => setOpen(false)}
        userId={user?.uid!}
      />
      {/* COULD DO THIS FOR CLEANER COMPONENTS */}
      {/* <Moderating snippets={snippetState.filter((item) => item.isModerator)} />
      <MyCommunities snippets={snippetState} setOpen={setOpen} /> */}
      {mySnippets.find((item) => item.isModerator) && (
        <Box mt={3} mb={4}>
          <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
            MODERATING
          </Text>
          {mySnippets
            .filter((item) => item.isModerator)
            .map((snippet) => (
              <MenuListItem
                key={snippet.communityId}
                displayText={`r/${snippet.communityId}`}
                link={`/r/${snippet.communityId}`}
                icon={IoAccessibilityOutline}
                iconColor="green.100"
              />
            ))}
        </Box>
      )}
      <Box mt={3} mb={4}>
        <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
          MY COMMUNITIES
        </Text>
        <MenuItem
          width="100%"
          fontSize="10pt"
          _hover={{ bg: "gray.100" }}
          onClick={() => setOpen(true)}
        >
          <Flex alignItems="center">
            <Icon fontSize={20} mr={2} as={GrAdd} />
            Create Community
          </Flex>
        </MenuItem>
        {mySnippets.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={IoAccessibilityOutline}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor="green.500"
            imageURL={snippet.imageURL}
          />
        ))}
      </Box>
    </>
  );
};

export default Communities;