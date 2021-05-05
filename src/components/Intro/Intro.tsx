import { Button } from '../Button'

import styles from './styles.module.scss'

export function Intro() {
  return (
    <div className={styles.container}>
      <img className={styles.imgIntro} src="/FindYourWay1.svg" alt="RITA" />
      <div>
        <h1 className={styles.title}>Ajudando você a cuidar da sua saúde &#10084;</h1>

        <p className={styles.text}>
          Com a ajuda da rita, você nunca mais vai se esquecer de tomar seus medicamentos. Te dando todo o apoio e
          suporte para gerir seus medicamentos de forma correta.
        </p>
        <Button>SAIBA MAIS!</Button>
      </div>
    </div>
  )
}
