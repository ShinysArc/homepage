import NextLink from 'next/link'
import { Button, Container, Badge, Box, Heading, Image, Link, List, ListItem, Icon, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoMail } from 'react-icons/io5'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Page = () => {
    const { t } = useTranslation('common');
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    {t('index.greetings')}
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            St&eacute;phane Gelibert
                        </Heading>
                        <p>{t('index.dev_eng_pho')}</p>
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
                    {t('index.about.title')}
                    </Heading>
                    <Paragraph>
                        {t('index.about.text_1')}
                        <br />
                        {t('index.about.text_2')}
                        <br />
                        {t('index.about.text_3')} {' '}
                        <Link href="https://aws.amazon.com">
                            Amazon Web Services
                        </Link> {t('index.about.text_4')} {' '}
                        {t('index.about.text_5')} {' '}
                        <Link href="/resume">
                            {t('index.about.text_6')}
                        </Link>
                        {' '} {t('index.about.text_7')} {' '}
                        <Link href="mailto:contact@stephanegelibert.com">
                            {t('index.about.text_8')}
                        </Link>
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                {t('index.about.portfolio')}
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t('index.skills.title')}
                    </Heading>
                    <List>
                        <ListItem>
                            <BioYear>{t('index.skills.programming_languages')}</BioYear>
                            C, C++, Java, C#, Python, JavaScript, OCaml
                        </ListItem>
                        <ListItem>
                            <BioYear>{t('index.skills.tools')}</BioYear>
                            Kubernetes, Docker, VMWare ESXi, Active Directory, Ansible, PFSense, PowerShell, MISP, Graylog
                        </ListItem>
                        <ListItem>
                            <BioYear>{t('index.skills.languages.title')}</BioYear>
                            {t('index.skills.languages.content')}
                        </ListItem>
                        <ListItem>
                            <BioYear>Certifications</BioYear>
                            {t('index.skills.driving_license')}
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t('index.experience.title')}
                    </Heading>
                    <List>
                        <ListItem>
                            <BioYear>AWS</BioYear><Badge>2024 -</Badge>
                            <br />
                            {t('index.experience.aws')}
                        </ListItem>
                        <br />
                        <ListItem>
                            <BioYear>Criteo</BioYear><Badge>2024</Badge>
                            <br />
                            {t('index.experience.criteo')}
                        </ListItem>
                        <br />
                        <ListItem>
                            <BioYear>Ephemere</BioYear><Badge>2023 - 2024</Badge>
                            <br />
                            {t('index.experience.ephemere')}
                        </ListItem>
                        <br />
                        <ListItem>
                            <BioYear>Google Developer Student Club</BioYear><Badge>2022 - 2023</Badge>
                            <br />
                            {t('index.experience.gdsc')}
                        </ListItem>
                        <br />
                        <ListItem>
                            <BioYear>Odin Vision</BioYear><Badge>2022</Badge>
                            <br />
                            {t('index.experience.odin_vision')}
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t('index.side.title')}
                    </Heading>
                    <List>
                        <ListItem>
                            <BioYear><Badge>Hackathon</Badge> GottaGoHack #4</BioYear>
                            {t('index.side.ggh4')}
                            <Link href={t.language + "/projects/vitalitypaw"}>
                                {t('index.side.this_link')}
                            </Link>.
                        </ListItem>
                        <ListItem>
                            <BioYear><Badge>CTF</Badge> 404CTF #2</BioYear>
                            {t('index.side.404ctf')}
                        </ListItem>
                        <ListItem>
                            <BioYear><Badge>Hackathon</Badge> WaveGame</BioYear>
                            {t('index.side.wave_game')}
                        </ListItem>
                        <ListItem>
                            <BioYear><Badge>Hackathon</Badge> Meta Global Hackathon</BioYear>
                            {t('index.side.meta')}
                        </ListItem>
                        <ListItem>
                            <BioYear><Badge>Hackathon</Badge> GottaGoHack #3</BioYear>
                            {t('index.side.ggh3')}
                            <Link href="/projects/asclepios">
                                {t('index.side.this_link')}
                            </Link>.
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2024 -</BioYear>
                        {t('index.bio.aws')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2018 - 2024</BioYear>
                        {t('index.bio.epita')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        {t('index.bio.criteo')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        {t('index.bio.odin')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        {t('index.bio.bac')}
                    </BioSection>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        {t('index.bio.born')}
                    </BioSection>
                </Section>

                <Section>
                    <Heading as="h3" variant="section-title">
                        {t('index.love.title')}♥
                    </Heading>
                    <List>
                        <ListItem>
                            <Paragraph>
                                <BioYear>Taekwondo</BioYear>
                                {t('index.love.taekwondo')}
                            </Paragraph>
                        </ListItem>
                        <br />
                        <ListItem>
                            <Paragraph>
                                <BioYear>
                                    <Link href="https://www.instagram.com/shinysarc" target="_blank">
                                        {t('index.love.photography_title')}
                                    </Link>
                                </BioYear>
                                {t('index.love.photography')}<Link href="https://ephemere.photo/" target="_blank">Ephemere</Link>.
                            </Paragraph>
                        </ListItem>
                        <br />
                        <ListItem>
                            <Paragraph>
                                <BioYear>{t('index.love.music_title')}</BioYear>
                                {t('index.love.music')}
                            </Paragraph>
                        </ListItem>
                    </List>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t('index.contact')}
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://linkedin.com/in/stephane-gelibert" target="_blank">
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

export async function getStaticProps({ locale }) {
    return {
        props: {
        ...(await serverSideTranslations(locale, [
            'common'
        ])),
        },
    }
}

export default Page
