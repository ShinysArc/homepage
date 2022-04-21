import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectImage } from '../../components/project'

const Project = () => {
    return (
        <Layout title="42sh">
            <Container>
                <Title>
                    42sh {' '}<Badge>2021</Badge>
                </Title>

                <ProjectImage src="/images/projects/42sh.gif" alt="42sh" />
                
                <P>
                    A POSIX compliant, Bash-like shell written in C.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://gitfront.io/r/ShinysArc/ce88c99c9da7cfd5f160da355d573ebe3d9ad74e/42sh/'>
                            Link<ExternalLinkIcon mx="2px" />
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