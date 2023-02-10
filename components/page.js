import { useRouter } from 'next/router'
import styles from '../styles/Resume.module.css'

export const Page = ({ children }) => {
  const router = useRouter()
  return (
    router.asPath !== '/resume-content' ? (
      <div className={styles["page-main"]}>
        {children}
      </div>
    ) : (
      <div className={styles.page}>
        {children}
      </div>
    )
  )
}

export const Name = ({ children }) => (
  <div className={styles.name}>
    {children}
  </div>
)