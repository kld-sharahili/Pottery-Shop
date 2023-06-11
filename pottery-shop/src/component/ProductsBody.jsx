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

function ProductsBody() {
    const arrTitle = ['Salad Bowl', 'Small Mug', 'Bud Vase', 'Pourer', 'Dip Bowl', 'Bottle Vase Medium', 'Cuddle Cup', 'Piccolo Cup']
    const [products, setProducts] = useState([])


    return (
        <>
            <Flex justifyContent={'center'} marginTop={'10'} gap={'2'}>
                <Input w={'30em'} border={'2px'} borderColor={'black'} />
                <Button bg={'#D3C9A4'} _hover={{bg: '#84ccbc'}}><Search2Icon /></Button>               
            </Flex>

            <Container maxW='100em'>
            <Grid templateColumns='repeat(4, 1fr)' gap={1} marginTop={'10'}>
                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/elph-ceramics-salad-bowl-grey-speckle.jpg?v=1660615360&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[0]}</Heading>
                        <Text>
                            The Salad Bowl is a generous high sided ceramic bowl for serving salads when entertaining. 
                            It is also a great size to be used as a fruit bowl.
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            774 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>

                <GridItem w='100%'>
                    <Card maxW='sm' h={'34em'}>
                    <CardBody>
                        <Image
                        src='https://elphceramics.com/cdn/shop/products/elph-ceramics-small-mug-porcelain.jpg?v=1660615443&width=1426'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{arrTitle[1]}</Heading>
                            <Text>
                            Our ceramic small mug is uniquely hand crafted and perfect for your favourite warm beverage
                            </Text>
                            <StarsRating/>
                            <Text color='blue.600' fontSize='2xl'>
                                169 SR
                            </Text>
                        </Stack>
                    </CardBody>
                    </Card>
                </GridItem>

                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/elph-ceramics-bud-vase-porcelain_efdf0d4c-621b-426b-b8bc-bf914a323086.jpg?v=1660614562&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[2]}</Heading>
                        <Text>
                            The Bud Vase is designed to hold foraged blooms, small dried posies or single stems. Its sculptural design means it can also simply sit on its own as a ceramic accent piece.
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            145 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>

                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/ElphCeramicsPourerPorcelain.jpg?v=1660615350&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[3]}</Heading>
                        <Text>
                            Add finishing touches to salad and desserts with our pouring jug. 
                            Equally perfect for a dash of milk in afternoon tea or morning coffee.
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            189 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>            
            </Grid>

            <Grid templateColumns='repeat(4, 1fr)' gap={1} marginTop={'10'} position={'flex'}>
                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/elph-ceramics-dip-bowl-porcelain.jpg?v=1660614836&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[4]}</Heading>
                        <Text>
                        Our littlest bowl, uniquely handcrafted and designed to be used on the table for dips, 
                        sides or ice cream!
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            125 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>

                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/elph-ceramics-medium-bottle-vase-porcelain_21d0b7db-bb0f-4053-a515-572dc893c540.jpg?v=1660614383&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[5]}</Heading>
                        <Text>
                        Our ceramic small mug is uniquely hand crafted and perfect for your favourite warm beverage
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            169 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>

                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/elph-ceramics-cuddle-cup-porcelain.jpg?v=1660614764&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[6]}</Heading>
                        <Text>
                        Our iconic ceramic Cuddle Cup is perfect for regular lattes, flat whites, 
                        long blacks or a sneaky cocktail.
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            125 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>

                <GridItem w='100%'>
                <Card maxW='sm' h={'34em'}>
                <CardBody>
                    <Image
                    src='https://elphceramics.com/cdn/shop/products/elph-ceramics-piccolo-cup-porcelain.jpg?v=1660615264&width=1426'
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{arrTitle[7]}</Heading>
                        <Text>
                        The piccolo cup is designed for small and strong coffee but is also perfect for foraged flowers, 
                        saké or an aperitif.
                        </Text>
                        <StarsRating/>
                        <Text color='blue.600' fontSize='2xl'>
                            80 SR
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
                </GridItem>            
            </Grid>
            </Container>

            <Box h={'20em'}>

            </Box>
        </>
    )
}

export default ProductsBody