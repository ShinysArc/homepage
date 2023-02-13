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
                <meta name="author" content="Stephane Gelibert" />
                <meta name="author" content="ShinysArc" />
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <meta name="twitter:title" content="Stephane Gelibert" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@ShinysArc" />
                <meta name="twitter:creator" content="@ShinysArc" />
                <meta name="twitter:image" content="https://www.stephanegelibert.com/card.png" />
                <meta property="og:site_name" content="Stephane Gelibert" />
                <meta name="og:title" content="Stephane Gelibert" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.stephanegelibert.com/card.png" />
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
