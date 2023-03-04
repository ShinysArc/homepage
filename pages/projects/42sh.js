import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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
                    A POSIX compliant, Bash-like shell written in C. It also implements a few builtins such as
                    echo, cd, export, source, and a few more.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/C_(programming_language)' target="_blank">
                                C99 Standard
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Meson_(software)' target="_blank">
                                Meson build system
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Unix_shell' target="_blank">
                                Shell
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project