import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import firebase from 'firebase/compat/app';
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" mb={4} width="100%">
      <Button
        variant="oauth"
        mb={2}
        onClick={() => signInWithGoogle()}
        isLoading={loading}
      >
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth"> <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdiscord.com%2Fbranding&psig=AOvVaw1eP79YyE0WOFPednjN-JiS&ust=1718315493168000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMje65eG14YDFQAAAAAdAAAAABAE" height="20px" mr={4} /> Continue With Discord</Button>
      {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error.message}
        </Text>
      )}
    </Flex>
  );
};
export default OAuthButtons;