import styles from '../styles/Resume.module.css'

export const Page = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
)

export const Name = ({ children }) => (
  <div className={styles.name}>
    {children}
  </div>
)