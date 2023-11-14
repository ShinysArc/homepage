import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Vitality Paw">
            <Container>
                <Title>
                    Vitality Paw {' '}<Badge>2023</Badge>
                </Title>
                <P>
                    This project was built with {' '}
                    <Link href='https://github.com/bunbun721' target="_blank">
                        Georgia Bjärstål
                    </Link>, {' '}
                    <Link href='https://github.com/yamidea' target="_blank">
                        Eric Bjärstål
                    </Link>, {' '}
                    <Link href='https://github.com/rrajaonarisoa' target="_blank">
                        Rianando Rajaonarisoa
                    </Link> {' '}
                    for a Hackathon organized by {' '}
                    <Link href='https://www.gottagohack.fr' target="_blank">
                        Gotta Go Hack
                    </Link>.
                    <br />
                    Track your pet's activities and achieve wellness goals.
                    View your pet's health statistics.
                    Receive notifications to join your dog's friends when they go out for a walk.
                    The frontend was written in React and the backend in NodeJS.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://github.com/VitalityPaw/VitalityPaw' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Node.js' target="_blank">
                                NodeJS
                            </Link>, {' '}
                            <Link href='https://reactjs.org' target="_blank">
                                React
                            </Link>, {' '}
                            <Link href='https://www.mongodb.com' target="_blank">
                                MongoDB
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project