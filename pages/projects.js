import NextLink from 'next/link'
import { Box, Button, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumb42sh from '../public/images/projects/42sh_preview.png'
import thumbJWS from '../public/images/projects/jws_preview.png'
import thumbTiger from '../public/images/projects/tiger_preview.png'
import thumbOCR from '../public/images/projects/ocr_preview.png'
import thumbPING from '../public/images/projects/ping_preview.png'
import thumbAsclepios from '../public/images/projects/asclepios_preview.png'
import thumbFIC from '../public/images/projects/fic_preview.png'
import thumbVitalityPaw from '../public/images/projects/vitalitypaw_preview.png'
import thumbEpitAPT from '../public/images/projects/epitapt_preview.png'
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="epitapt" title="EpitAPT" thumbnail={thumbEpitAPT}>
                            A cross-platform malware written in C++ for the client and Django for the C2 server.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="vitalitypaw" title="Vitality Paw" thumbnail={thumbVitalityPaw}>
                            An application that helps improve your animal care.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="fic" title="FIC" thumbnail={thumbFIC}>
                            Forensics challenges for the European Cyber Cup.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="asclepios" title="Asclepios" thumbnail={thumbAsclepios}>
                            A web application that allows hospitals to manage medical records.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="barbytes" title="BarBytes" thumbnail={thumbPING}>
                            A C/C++ IDE written in 3 weeks.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="tiger" title="Tiger Compiler" thumbnail={thumbTiger}>
                            A C++ compiler for the toy language Tiger.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="jws" title="JWS" thumbnail={thumbJWS}>
                            Implemented a Rest API in Java using a layered architecture.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="42sh" title="42sh" thumbnail={thumb42sh}>
                            A POSIX compliant, Bash-like shell written in C.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="ocr" title="OCR" thumbnail={thumbOCR}>
                            An OCR written in C using GTK3 and SDL2.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Go to main page</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export default Projects