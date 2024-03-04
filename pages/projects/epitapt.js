import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectImage } from '../../components/project'

const Project = () => {
    return (
        <Layout title="EpitAPT">
            <Container>
                <Title>
                    EpitAPT {' '}<Badge>2024</Badge>
                </Title>

                <ProjectImage src="/images/projects/epitapt_dashboard.png" alt="dashboard" />

                <P>
                    A sophisticated, modular cross-platform malware ecosystem leveraging C++ for client-side operations and Django for centralized command and control.
                    Includes a modular, multi-threaded, and multi-process client-side agent, includes a kill switch, and SSL/TLS encryption.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/C++_(programming_language)' target="_blank">
                                C++
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Django_(web_framework)' target="_blank">
                                Django
                            </Link>
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project