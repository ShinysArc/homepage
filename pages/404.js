import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Oops!</Heading>
            <Text>We cannot seem to find the page you are looking for.</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Go to main page</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound