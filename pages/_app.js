import Layout from '../components/layouts/main'
import Fonts from "../components/fonts"
import Chakra from "../components/chakra"
import nextI18NextConfig from '../next-i18next.config'
import { AnimatePresence } from 'framer-motion'
import { appWithTranslation } from 'next-i18next';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

const Website = ({ Component, pageProps, router }) => {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default appWithTranslation(Website, nextI18NextConfig)