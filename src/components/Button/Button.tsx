import React from 'react'
import styles from './styles.module.scss'

export function Button(props) {
  return <button className={styles.button}>{props.children}</button>
}
