import React from "react"
import {useNavigate } from "react-router-dom"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Image,
    Box,
  } from '@chakra-ui/react'
  
  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate=useNavigate()
    const HandleSignUp=()=>{
      navigate("/home")
      onClose()
    }
   return (
      <>
      <Button onClick={onOpen} bg={"blue.500"}>Sign Up</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent paddingBottom={"100px"} w={"1000px"} >
            <ModalCloseButton />
            <ModalBody paddingTop={100}  >
             <Box paddingLeft="40%"><Image w={"40px"}  src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202210310306" /></Box> 
             <br/>
             <b><h1 style={{paddingLeft:"60px"}} >Sign in with your Apple ID</h1></b>
             <br/>
             <p>You will be signed in to Apple TV and Apple Music</p>
             <br/> 
             <Input placeholder="Apple"/>
             <br/>
             <br/>
              <Input placeholder="Enter_password"  type="password"/>
              <br/>
            </ModalBody>
  
            <ModalFooter>
             
              <Button onClick={HandleSignUp} bg="blue.500" > Sign-Up</Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default BasicUsage