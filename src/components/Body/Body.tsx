import styles from './styles.module.scss'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../../routes'

export function Body() {
  return (
    <body className={styles.bodyContainer}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </body>
  )
}
