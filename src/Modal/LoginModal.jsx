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
        <Button
          color="white"
          variant="outline"
          backgroundColor="#5034ff"
          _hover={{ borderColor: "white", border: "2px" }}
          onClick={onOpen}
        >
          Sign In
        </Button>
  
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
  