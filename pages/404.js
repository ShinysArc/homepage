import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotFound = () => {
    const { t } = useTranslation('common');
    return (
        <Container>
            <Heading as="h1">Oops!</Heading>
            <Text>{t('404')}</Text>
            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">{t('main_page')}</Button>
                </NextLink>
            </Box>
        </Container>
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

export default NotFound