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
      <Button
        color="white"
        variant="outline"
        backgroundColor="#5034ff"
        _hover={{ borderColor: "white", border: "2px" }}
        onClick={onOpen}
      >
        Sign Up
      </Button>

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
