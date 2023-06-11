import Nav from "../component/Nav"
import ProductsBody from "../component/ProductsBody"
import { 
    Box,
    Flex,
    Image,
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
import {Link} from 'react-router-dom'
function ProductsPage() {
    return (
        <>
            <Nav logoutBtn={
                <Link to='/'>
                    <Button bg={"#D3C9A4"} _hover={{bg: "red", color: "white"}} transitionDuration={"1s"}>Log out</Button>
                </Link>
            }/>
            <ProductsBody />
        </>
    )
}

export default ProductsPage