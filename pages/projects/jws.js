import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectImage } from '../../components/project'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Project = () => {
    const { t } = useTranslation('common');
    return (
        <Layout title="JWS">
            <Container>
                <Title>
                    Java Web Service {' '}<Badge>2022</Badge>
                </Title>
                <P>
                    {t('jws')}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Java_(programming_language)' target="_blank">
                                Java
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Quarkus' target="_blank">
                                Quarkus
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Hibernate_(framework)' target="_blank">
                                Hibernate
                            </Link>
                        </span>
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

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [
          'common'
        ])),
      },
    }
  }

export default Project