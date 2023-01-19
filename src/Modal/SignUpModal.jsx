import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SignupCard from "../Cards/SignupCard";

function ModalCom() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        w="60px"
        color="black"
        variant="outline"
        _hover={{ cursor: "pointer", fontSize: "15px" }}
        onClick={onOpen}
      >
        Sign Up
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <SignupCard />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalCom;
