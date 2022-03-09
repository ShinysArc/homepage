import { Container, Heading } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Resume = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Resume
                </Heading>
                <Section>
                    Add the resume here.
                </Section>
            </Container>
        </Layout>
    )
}

export default Resume