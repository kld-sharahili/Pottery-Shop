import Nav from "../component/Nav"
import ProductsPage from "./ProductsPage"
import HomeBody from "../component/HomeBody"
import { 
    Flex,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { useState } from 'react'



function HomePage() {
    const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCloseOpen } = useDisclosure()
    const { isOpen: isLoginOpen, onOpen: onLogOpen, onClose: onLoginOpen } = useDisclosure()

    const [password, setPassword] = useState('')

    const pwdInput = (event) => {
        setPassword(event.target.value)      
    }

    const toLogin = () => {
        if(password.length <= 4){
            alert('The password should more than 4 letters')
        }
    }
    return (
        <>
            <Nav 
            newUserBtn={
                <Button bg={"#D3C9A4"} _hover={{bg: "#265d51", color: "white"}} transitionDuration={"1s"}
                onClick={onCreateOpen}
                >Create Acount</Button>}

            loginBtn={
                <Button bg={"#D3C9A4"} _hover={{bg: "#265d51", color: "white"}} transitionDuration={"1s"}
                onClick={onLogOpen}
                >Login</Button>
            }
            />
                {/* CREATE USER BTN WITH MODAL */}
                <Modal isOpen={isCreateOpen} onClose={onCloseOpen}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    <ModalCloseButton />
                                    Create Account
                                </ModalHeader>
                                <ModalBody>
                                            <form>
                                                <FormControl>
                                                    <FormLabel>Username</FormLabel>
                                                    <Input type='text' border={"2px"} borderColor={"#D3C9A4"}></Input>
                                                    <FormLabel>Email</FormLabel>
                                                    <Input type='email' border={"2px"} borderColor={"#D3C9A4"}></Input>
                                                    <FormLabel>Password</FormLabel>
                                                    <Input type='password' border={"2px"} borderColor={"#D3C9A4"}></Input>
                                                </FormControl>
                                            </form>  
                                </ModalBody>
                                <Flex justifyContent={"start"}>
                                <ModalFooter>
                                    <Link to='/'>
                                        <Button type='submit' bg={"#D3C9A4"} _hover={{bg: "#265d51", color: "white"}} transitionDuration={"1s"}>Create</Button> 
                                    </Link>
                                </ModalFooter>
                                </Flex>
                            </ModalContent>
                        </Modal>

                        {/* LOGIN USER BTN WITH MODAL */}
                        <Modal isOpen={isLoginOpen} onClose={onLoginOpen}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>
                                    <ModalCloseButton />
                                    Log in to your account
                                </ModalHeader>
                                <ModalBody>
                                                <FormControl>
                                                    <FormLabel>Username</FormLabel>
                                                    <Input type='text' border={"2px"} borderColor={"#D3C9A4"}></Input>
                                                    <FormLabel>Password</FormLabel>
                                                    <Input type='text' value={password} onChange={pwdInput} border={"2px"} borderColor={"#D3C9A4"}></Input>
                                                </FormControl>
                                </ModalBody>
                                <Flex justifyContent={"start"}>
                                <ModalFooter>  
                                    <Link to='/products'>
                                        <Button type='submit' onClick={toLogin} bg={"#D3C9A4"} _hover={{bg: "#265d51", color: "white"}} transitionDuration={"1s"}>Login</Button>
                                    </Link>      
                                </ModalFooter>
                                </Flex>
                            </ModalContent>
                        </Modal>
            <HomeBody />
        </>
    )
}

export default HomePage