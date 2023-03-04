import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectImage } from '../../components/project'

const Project = () => {
    return (
        <Layout title="BarBytes">
            <Container>
                <Title>
                    BarBytes {' '}<Badge>2022</Badge>
                </Title>

                <ProjectImage src="/images/projects/ping.gif" alt="PING" />

                <P>
                    A C/C++ IDE written in 3 weeks, within a group of 5. It implements all the important
                    features of an IDE such as compiling and running programs. It can also play music and change themes.
                    The project was written in Java for the backend, we used Spark for the Rest API, and React JS for the frontend.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://github.com/ShinysArc/ping' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Java_(programming_language)' target="_blank">
                                Java
                            </Link>, {' '}
                            <Link href='https://sparkjava.com' target="_blank">
                                Spark
                            </Link>, {' '}
                            <Link href='https://reactjs.org' target="_blank">
                                React JS
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project