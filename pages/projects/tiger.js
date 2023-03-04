import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="Tiger Compiler">
            <Container>
                <Title>
                    Tiger Compiler {' '}<Badge>2022</Badge>
                </Title>
                <P>
                    Frontend of a compiler for the toy language Tiger, as described in the book &apos;Modern Compiler Implementation&apos;
                    by Andrew Appel. It was written in C++ within a group of 4 students.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/C%2B%2B' target="_blank">
                                C++
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/GNU_Autotools' target="_blank">
                                Autotools
                            </Link>, {' '}
                            <Link href='https://www.lrde.epita.fr/~tiger/tiger.html' target="_blank">
                                Tiger
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project