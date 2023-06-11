import { 
    Box,
    Flex,
    Image,
    Heading,
    Button,
    Stack,
    Text,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Grid, 
    GridItem,
    Container,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { 
    Search2Icon
} from '@chakra-ui/icons'
import { useState } from 'react'
import StarsRating from 'react-star-rate';
import { productInfo } from "../component/dataProductsInfo" 

function ProductsBody() {
    // const arrTitle = ['Salad Bowl', 'Small Mug', 'Bud Vase', 'Pourer', 'Dip Bowl', 'Bottle Vase Medium', 'Cuddle Cup', 'Piccolo Cup']
    const [products, setProducts] = useState('')


    return (
        <>
            <Flex justifyContent={'center'} marginTop={'10'} gap={'2'}>
                <Input onChange={(event) => setProducts(event.target.value)} w={'30em'} border={'2px'} borderColor={'black'} />
                <Button bg={'#D3C9A4'} _hover={{bg: '#84ccbc'}}><Search2Icon /></Button>               
            </Flex>

            {
                productInfo.filter((item) => {
                    return products.toLowerCase() === '' 
                    ? item  
                    : item.name.toLowerCase().includes(products)
                }).map(item => {
                    return (
                        <Container maxW='100em'>
                            <Grid templateColumns='repeat(4, 1fr)' gap={1} marginTop={'10'}>
                                <GridItem w='100%'>
                                    <Card maxW='md' h={'34em'}>
                                        <CardBody>
                                        <Image
                                        src={item.img}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md'>{item.name}</Heading>
                                            <Text>
                                                {item.details}
                                            </Text>
                                            <StarsRating/>
                                            <Text color='blue.600' fontSize='2xl'>
                                                {item.price}
                                            </Text>
                                        </Stack>
                                        </CardBody>
                                    </Card>
                                </GridItem>
                            </Grid>
                        </Container>
                    )
                })
            }

            <Box h={'20em'}>

            </Box>
        </>
    )
}

export default ProductsBody