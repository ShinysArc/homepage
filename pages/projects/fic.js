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
        <Layout title="FIC">
            <Container>
                <Title>
                    FIC {' '}<Badge>2023</Badge>
                </Title>
                <P>
                    {t('fic.text_1')} <Link href='https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)' target='_blank'>CTF</Link> {t('fic.text_2')}
                    <br />
                    {t('fic.text_3')}
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Challenges</Meta>
                        <Link href='https://fic.srs.epita.fr/2024' target="_blank">
                            Link<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Tags</Meta>
                        <span>
                            <Link href='https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)' target="_blank">
                                CTF
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Reverse_engineering' target="_blank">
                                Reverse engineering
                            </Link>, {' '}
                            <Link href='https://en.wikipedia.org/wiki/Digital_forensics' target="_blank">
                                Forensics
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