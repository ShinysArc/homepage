import Head from 'next/head'
import NavBar from '../navbar.js'
//import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
//import Laptop from '../laptop'

/*const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Stephane Gelibert</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <NoSsr>
                    <Laptop />
                </NoSsr>
                {children}
            </Container>
        </Box>
    )
}*/

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Stephane Gelibert</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main