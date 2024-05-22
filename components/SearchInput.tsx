import React from "react";
import { Flex, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";


import { User } from "firebase/auth";

// type SearchInputProps = {
//   user: User;
// };

const SearchInput = ( ) => {
  return (
    <Flex
      flexGrow={1}
    //   maxWidth={user ? "auto" : "600px"}
      mr={2}
      alignItems="center"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.400"
        
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
        <Input
          placeholder="Search Revert Central"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "green.300",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "green.500",
          }}
          height="34px"
          bg="green.200"
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;