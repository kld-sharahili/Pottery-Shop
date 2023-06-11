import { 
    Box,
    Flex,
    Image,
    Link,
    Spacer,
    Button,
    Input,
    FormLabel,
    Grid,
    GridItem
} from '@chakra-ui/react'
import { 
    FaTwitter,
    FaInstagramSquare,
    FaWhatsappSquare
} from 'react-icons/fa'
import '../App.css'

function Footer() {
    return (

        <Box className='footer' bg={"#D3C9A4"} w={'full'} h={'56'}>
            <Grid
            h='60'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} paddingLeft={'20'}>
                    <Flex justifyContent={'start'} marginTop={'10'} marginBottom={'0'}>
                        <Link fontSize={'2xl'}>About us</Link>
                    </Flex>
                    <Flex justifyContent={'start'} marginTop={'0'}>
                        <Link fontSize={'2xl'}>Polices</Link>
                    </Flex>
                    <Flex justifyContent={'start'} marginTop={'0'}>
                        <Link fontSize={'2xl'}>Contact us</Link>
                    </Flex>
                </GridItem>
                <GridItem colSpan={4} bg='' marginTop={'10'}>
                    <Flex justifyContent={'center'} gap={'5'}>
                        <FormLabel fontSize={'2xl'}>NewsLetter</FormLabel>
                        <Input bg={'white'} border={'2px'} borderColor={'black'} w={'96'}></Input>
                        <Button bg={'#265d51'} color={'white'} _hover={{bg: 'black'}}>Subscribe</Button>
                    </Flex>
                </GridItem>
                <GridItem colSpan={4}>
                    <Flex justifyContent={'center'} gap={'10'}>
                            <Link><FaTwitter size={'52'} color={'#265d51'} /></Link>
                            <Link><FaInstagramSquare size={'52'} color={'#265d51'} /></Link>
                            <Link><FaWhatsappSquare size={'52'} color={'#265d51'} /></Link>                                                 
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Footer