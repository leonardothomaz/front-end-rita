import React from 'react'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const router = useRouter()

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <img src="/Rita.svg" alt="RITA" />
      </Link>
      <div>
        <button>Quem somos?</button>
        <button>Contato</button>
        <Link href="/Cadastro">
          <button>Espaço dos fármacos</button>
        </Link>
      </div>
    </header>
  )
}
