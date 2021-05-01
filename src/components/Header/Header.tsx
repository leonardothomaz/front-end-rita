import React from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  return (
    <header className={styles.headerContainer}>
      <img src="/Rita.svg" alt="RITA" />
      <div>
        <button>Quem somos?</button>
        <button>Contato</button>
        <button onClick={() => router.push('/Cadastro')}>Espaço dos fármacos</button>
      </div>
    </header>
  )
}
