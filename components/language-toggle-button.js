import { AnimatePresence, motion } from 'framer-motion'
import { IconButton } from "@chakra-ui/react"
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'

const LanguageToggleButton = () => {
    const router = useRouter()
    const { i18n } = useTranslation('common');

    const handleLanguageToggle = () => {
        const newLocale = i18n.language === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLocale);
        const { pathname, asPath, query } = router
        router.push({ pathname, query }, asPath, { locale: newLocale, scroll: false })
    };

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div style={{ display: 'inline-block' }}
                key={i18n.language === 'en' ? 'en' : 'fr'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                <IconButton aria-label="Toggle theme"
                    colorScheme={'white'}
                    icon={<img src={`/images/icons/${i18n.language === 'en' ? 'fr' : 'en'}.png`} alt="Flag" />}
                    onClick={handleLanguageToggle}
                ></IconButton>
            </motion.div>
        </AnimatePresence>
    )
}

export default LanguageToggleButton