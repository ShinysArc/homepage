import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="OCR">
            <Container>
                <Title>
                    OCR {' '}<Badge>2019</Badge>
                </Title>
                <P>
                    An OCR written in C using GTK3 and SDL2 for the GUI.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://gitfront.io/r/ShinysArc/W9RwT17ZVqus/OCR/' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/C_(programming_language)' target="_blank">
                                C
                            </Link>, {' '}
                            <Link href='https://www.gtk.org' target="_blank">
                                GTK3
                            </Link>, {' '}
                            <Link href='https://www.libsdl.org/index.php' target="_blank">
                                SDL2
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project