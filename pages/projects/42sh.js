import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="42sh">
            <Container>
                <Title>
                    42sh {' '}<Badge>2021</Badge>
                </Title>
                <P>
                    A POSIX compliant, Bash-like shell written in C.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://github.com/Adamaq01/beike'>
                            GitHub<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>C99 Standard, Meson build system, Shell</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project