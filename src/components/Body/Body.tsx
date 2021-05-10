import styles from './styles.module.scss'
import { Intro } from '../Intro'

export function Body() {
  return (
    <div className={styles.bodyContainer}>
      <Intro />
    </div>
  )
}
