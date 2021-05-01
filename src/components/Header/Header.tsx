import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/Rita.svg" alt="RITA" />
      <div>
        <button>Quem somos?</button>
        <button>Contato</button>

        <Link to="/Cadastro">
          <button>Espaço dos fármacos</button>
        </Link>
      </div>
    </header>
  )
}
