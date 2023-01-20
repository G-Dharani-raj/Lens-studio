import {
  Box,
  Button,
  Heading,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../../FireBase/firebase";
import Alert from "./Alert";
import DeleteButton from "./DeleteButton";
import "./DeleteButton.css";
import SingleUser from "./SingleUser";
const AdminUsersList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Head=["S.no","User Id","First Name","Last Name","Phone No","User Email","Delete User"]
  const [deleteUserData, setDeleteUserData] = useState({});

  const [globalData, setGlobalData] = useState({
    users: "",
    activeUserCount: "",
  });

  console.log("globalData: ", globalData);
  useEffect(() => {
    const userCollectionRef = collection(db, "users");
    const unsubscribe = onSnapshot(
      userCollectionRef,
      (snapShot) => {
        var temp = [];
        snapShot.docs.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() });
        });

        setGlobalData((prev) => ({ ...prev, users: [...temp] }));
      },
      (error) => console.log(error)
    );

    // * cleanup function
    return unsubscribe;
  }, []);

  const DeleteUserConfirmation = (data) => {
    setDeleteUserData(data);
    onOpen();
  };

  // *deleting the users
  const DeleteUser = () => {
    const item = deleteUserData;
    deleteDoc(doc(db, "users", item.id)).then(() => {
      alert(`${item.email} has been deleted.`, "success");
    });
  };
  return (
    <>
      <Box>
        <Alert
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          text={"Delete user"}
          BtnText={"Confirm"}
          msg={`Are you sure? You want to Delete `}
          data={deleteUserData}
          execution={DeleteUser}
        />
        <Heading textAlign={"center"} padding="5" color="#78909C">
          User Panel
        </Heading>
        <Table>
          <TableCaption>Here you can see the user details</TableCaption>
          <Thead bg="#B2EBF2" height="50px">
            <Tr>
              {Head.map((el)=><Th>{el}</Th>)}
            </Tr>
          </Thead>
          <Tbody>
            {globalData?.users &&
              globalData.users?.map((data, i) => (
                <Tr key={data.id}>
                  <SingleUser key={data.id} userid={i + 1} {...data} />
                  <Td>
                    <DeleteButton
                      onClick={() => DeleteUserConfirmation(data)}
                    />
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default AdminUsersList;
