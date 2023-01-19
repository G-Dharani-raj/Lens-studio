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
import Login from "../Cards/LoginCard";

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        color="black"
        w="50px"
        variant="outline"
        _hover={{ cursor: "pointer", fontSize: "15px" }}
        onClick={onOpen}
      >
        Sign In
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default LoginModal;
