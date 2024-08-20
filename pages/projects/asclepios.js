import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Project = () => {
    const { t } = useTranslation('common');
    return (
        <Layout title="Asclepios">
            <Container>
                <Title>
                    Asclepios {' '}<Badge>2022</Badge>
                </Title>
                <P>
                    {t('asclepios.text_1')}
                    <Link href='https://github.com/aureleoules' target="_blank">
                        Aurèle Oulès
                    </Link>, {' '}
                    <Link href='https://github.com/bunbun721' target="_blank">
                        Georgia Bjärstål
                    </Link>, {' '}
                    <Link href='https://github.com/yamidea' target="_blank">
                        Marie Dumestre
                    </Link> {' '}
                    {t('asclepios.text_2')}
                    <br />
                    {t('asclepios.text_3')}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://github.com/SQ-Labs/Livrable' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Python_(programming_language)' target="_blank">
                                Python
                            </Link>, {' '}
                            <Link href='https://github.com/ibarrond/Pyfhel' target="_blank">
                                Pyfhel
                            </Link>, {' '}
                            <Link href='https://svelte.dev' target="_blank">
                                Svelte
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