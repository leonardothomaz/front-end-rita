import styles from './styles.module.scss'
import { Intro } from '../Intro'
import { Header } from '../Header'

export function Body() {
  return (
    <body className={styles.bodyContainer}>
      <Header />

      <Intro />
    </body>
  )
}
