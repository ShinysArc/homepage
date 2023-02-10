import Head from 'next/head'
import NavBar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
	    	<meta name="description" content="Stephane Gelibert's personal website."/>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>Stephane Gelibert</title>
            </Head>

            {router.asPath !== '/resume-content' && (<NavBar path={router.asPath} />)}

            <Container maxW="container.md" pt={14}>
                {children}

                {router.asPath !== '/resume-content' && (<Footer />)}
            </Container>
        </Box>
    )
}

export default Main
