import NextLink from 'next/link'
import { Box, Button, Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumb42sh from '../public/images/projects/42sh_preview.png'
import thumbJWS from '../public/images/projects/jws_preview.png'
import thumbTiger from '../public/images/projects/tiger_preview.png'
import thumbOCR from '../public/images/projects/ocr_preview.png'
import thumbPING from '../public/images/projects/ping_preview.png'
import thumbAsclepios from '../public/images/projects/asclepios_preview.png'
import thumbFIC from '../public/images/projects/fic_preview.png'
import thumbVitalityPaw from '../public/images/projects/vitalitypaw_preview.png'
import thumbEpitAPT from '../public/images/projects/epitapt_preview.png'
import Layout from '../components/layouts/article'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Projects = () => {
    const { t } = useTranslation('common');
    return (
        <Layout title="Projects">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {t('projects.title')}
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="epitapt" title="EpitAPT" thumbnail={thumbEpitAPT}>
                            {t('projects.epitapt')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="vitalitypaw" title="Vitality Paw" thumbnail={thumbVitalityPaw}>
                            {t('projects.vitality_paw')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="fic" title="FIC" thumbnail={thumbFIC}>
                            {t('projects.fic')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="asclepios" title="Asclepios" thumbnail={thumbAsclepios}>
                            {t('projects.asclepios')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="barbytes" title="BarBytes" thumbnail={thumbPING}>
                            {t('projects.barbytes')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="tiger" title="Tiger Compiler" thumbnail={thumbTiger}>
                            {t('projects.tiger')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="jws" title="JWS" thumbnail={thumbJWS}>
                            {t('projects.jws')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="42sh" title="42sh" thumbnail={thumb42sh}>
                            {t('projects.42sh')}
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="ocr" title="OCR" thumbnail={thumbOCR}>
                            {t('projects.ocr')}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">{t('main_page')}</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    )
}

export async function getServerSideProps({ locale, req }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      cookies: req.headers.cookie ?? '',
    },
  };
}

export default Projects