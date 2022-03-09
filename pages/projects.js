import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumb42sh from '../public/images/projects/42sh_preview.png'
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="42sh" title="42sh" thumbnail={thumb42sh}>
                            A POSIX compliant, Bash-like shell written in C.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="jws" title="JWS" thumbnail={thumb42sh}>
                            Implemented a Rest API in Java using a layered architecture.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects