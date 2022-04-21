import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectImage } from '../../components/project'

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
                        <Link href='https://gitfront.io/r/ShinysArc/6f50b0af49c8562086bebdafecade943ce5fb3f1/JWS/'>
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>Java, Quarkus, Hibernate</span>
                    </ListItem>
                </List>

                <ProjectImage src="/images/projects/jws_01.png" alt="JWS" />
                <ProjectImage src="/images/projects/jws_02.png" alt="JWS" />
                <ProjectImage src="/images/projects/jws_03.png" alt="JWS" />
                <ProjectImage src="/images/projects/jws_04.png" alt="JWS" />
            </Container>
        </Layout>
    )
}

export default Project