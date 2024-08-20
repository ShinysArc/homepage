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
        <Layout title="Vitality Paw">
            <Container>
                <Title>
                    Vitality Paw {' '}<Badge>2023</Badge>
                </Title>
                <P>
                    {t('vitality_paw.text_1')}
                    <Link href='https://github.com/bunbun721' target="_blank">
                        Georgia Bjärstål
                    </Link>, {' '}
                    <Link href='https://github.com/ebjarstal' target="_blank">
                        Eric Bjärstål
                    </Link>, {' '}
                    <Link href='https://github.com/rrajaonarisoa' target="_blank">
                        Rianando Rajaonarisoa
                    </Link> {' '}
                    {t('vitality_paw.text_2')}
                    <Link href='https://www.gottagohack.fr' target="_blank">
                        Gotta Go Hack
                    </Link>.
                    <br />
                    {t('vitality_paw.text_3')}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Source code</Meta>
                        <Link href='https://github.com/VitalityPaw/VitalityPaw' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Node.js' target="_blank">
                                NodeJS
                            </Link>, {' '}
                            <Link href='https://reactjs.org' target="_blank">
                                React
                            </Link>, {' '}
                            <Link href='https://www.mongodb.com' target="_blank">
                                MongoDB
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