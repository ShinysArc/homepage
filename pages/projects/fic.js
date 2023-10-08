import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="FIC">
            <Container>
                <Title>
                    FIC {' '}<Badge>2023</Badge>
                </Title>
                <P>
                    Creation of <Link href='https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)' target='_blank'>CTF</Link> challenges with different levels of difficulty (OSINT, Reverse Engineering, Cryptography, etc.).
                    <br />
                    The challenges will be presented for the ECC (European Cyber Cup) during the FIC (Forum International de la Cybersécurité).
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Challenges available at</Meta>
                        <Link href='https://fic.srs.epita.fr/2024' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)' target="_blank">
                                CTF
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Reverse_engineering' target="_blank">
                                Reverse engineering
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Digital_forensics' target="_blank">
                                Forensics
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project