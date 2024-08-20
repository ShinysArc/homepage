import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Project = () => {
    const { t } = useTranslation('common');
    return (
        <Layout title="Tiger Compiler">
            <Container>
                <Title>
                    Tiger Compiler {' '}<Badge>2022</Badge>
                </Title>
                <P>
                    {t('tiger')}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/C%2B%2B' target="_blank">
                                C++
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/GNU_Autotools' target="_blank">
                                Autotools
                            </Link>, {' '}
                            <Link href='https://www.lrde.epita.fr/~tiger/tiger.html' target="_blank">
                                Tiger
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