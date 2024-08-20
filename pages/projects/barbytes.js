import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ProjectImage } from '../../components/project'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Project = () => {
    const { t } = useTranslation('common');
    return (
        <Layout title="BarBytes">
            <Container>
                <Title>
                    BarBytes {' '}<Badge>2022</Badge>
                </Title>

                <ProjectImage src="/images/projects/ping.gif" alt="PING" />

                <P>
                    {t('barbytes')}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://github.com/ShinysArc/ping' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Java_(programming_language)' target="_blank">
                                Java
                            </Link>, {' '}
                            <Link href='https://sparkjava.com' target="_blank">
                                Spark
                            </Link>, {' '}
                            <Link href='https://reactjs.org' target="_blank">
                                React JS
                            </Link>
                        </span>
                    </ListItem>
                </List>
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