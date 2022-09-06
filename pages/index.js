import NextLink from 'next/link'
import { Button, Container, Box, Heading, Image, Link, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMail } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hi, I&apos;m a computer engineering student based in Paris, France.
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Stephane Gelibert
                        </Heading>
                        <p>Developer, engineer, photographer </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/stephane.png"
                            alt="Profile Image"
                        />
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        I am Stephane Gelibert, a computer engineering student at EPITA, based in Paris, France.
                        I have a knack for all things related to IT, programming, and development.
                        <br />
                        When not online, I love hanging out with my camera.
                        I am currently working at
	    		{' '}
	    		<Link href="https://odin-vision.com" target="_blank">
	    			Odin Vision
	    		</Link>
	    		{' '}
	    		as a software engineer intern.
                        Interested by my profile? {' '}
                        <Link href="/files/resume.pdf" target="_blank">
                            Click here to see my resume
                        </Link>
                        {' '} or {' '}
                        <Link href="mailto:contact@stephanegelibert.com">
                            contact me!
                        </Link>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Skills
                    </Heading>
                    <List>
                        <ListItem>
                            <BioYear>Programming languages</BioYear>
                            C/C++, Java, C#, Python, JavaScript, Rust, OCaml
                        </ListItem>
                        <ListItem>
                            <BioYear>Languages</BioYear>
                            French, English (TOEIC 965)
                        </ListItem>
                        <ListItem>
                            <BioYear>Certificates</BioYear>
                            Driving license
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2018 to present</BioYear>
                        Student at Epita engineering school.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Obtained the scientific baccalaureate, with honors.
                    </BioSection>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Born in Paris, France.
                    </BioSection>
                </Section>

                <Section>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <List>
                        <ListItem>
                            <Paragraph>
                                <BioYear>Taekwondo</BioYear>
                                I have practiced Taekwondo for a few years and I have to say I fell in love with it.
                                Although in the last 3 years I haven&apos;t had many occasions to go to training, I always enjoy a fun kicking session.
                            </Paragraph>
                        </ListItem>
                        <br />
                        <ListItem>
                            <Paragraph>
                                <BioYear>
                                    <Link href="https://www.instagram.com/shinysarc" target="_blank">
                                        Photography
                                    </Link>
                                </BioYear>
                                I discovered photography when I first joined Epita. I was astonished by the sheer amount of possibilities
                                it can lead to. So I instantly joined the photography club and bought a camera with my first salary.
                                I often shoot cosplay photos for my girlfriend, and actively participate in club activities.
                            </Paragraph>
                        </ListItem>
                        <br />
                        <ListItem>
                            <Paragraph>
                                <BioYear>Music</BioYear>
                                I listen to pretty much everything. My range can go from K-Pop to good old Power Metal. A big shoutout to DragonForce and Dreamcatcher, these are probably my favorite groups ever.
                                But yeah, as long as it&apos;s good, I can vibe to it.
                            </Paragraph>
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Contact me
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://fr.linkedin.com/in/stephane-gelibert" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                    @stephane-gelibert
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/shinysarc" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @shinysarc
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/shinysarc" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />}>
                                    @shinysarc
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="mailto:contact@stephanegelibert.com" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />}>
                                contact@stephanegelibert.com
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page
