import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="JWS">
            <Container>
                <Title>
                    Java Web Service {' '}<Badge>2022</Badge>
                </Title>
                <P>
                    Implemented a Rest API in Java using a layered architecture.
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
                        <span>Java, Quarkus, Hibernate</span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project