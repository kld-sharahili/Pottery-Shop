import { 
    Box,
    Flex,
    Image,
    Link,
    Spacer,
    Button,
    HStack,
    Text,
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

function Nav(props) {
    const { isOpen: isCreateOpen, onOpen: onCreateOpen, onClose: onCloseOpen } = useDisclosure()
    const { isOpen: isLoginOpen, onOpen: onLogOpen, onClose: onLoginOpen } = useDisclosure()

    return (
                <Flex as={"nav"} p={"10"} gap={"10"} borderBottom={"4px"} borderColor={"Black"}>
                    <Box>
                        <Flex alignItems={"end"}>
                            <Image src='/public/images/vases.png' h={"10"}></Image>
                            <Text fontSize={"32"} fontWeight={"bold"}>POTTERY STUDIO</Text>
                        </Flex>                      
                    </Box>

                    <Box w={"60"}>

                    </Box>
                    <Box>
                        <Flex gap={"10"}>
                            <Link fontSize={"24"} _hover={{color: "#D3C9A4", fontWeight: "Bold" ,transitionDuration: "1.4s"}}>our studio</Link>
                            <Link fontSize={"24"} _hover={{color: "#D3C9A4", fontWeight: "Bold" ,transitionDuration: "1.4s"}}>products</Link>
                            <Link fontSize={"24"} _hover={{color: "#D3C9A4", fontWeight: "Bold" ,transitionDuration: "1.4s"}}>Community</Link>
                        </Flex>  
                    </Box>
                    <Spacer />
                    <HStack>
                        {props.newUserBtn}
                        {props.loginBtn}
                        {props.logoutBtn}
                    </HStack>
                    
                </Flex>
    )
}

export default Nav