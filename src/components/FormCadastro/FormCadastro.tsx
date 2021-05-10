import React, { useMemo, useState } from 'react'
import { Button } from '../Button'
import styles from './styles.module.scss'
import * as Yup from 'yup'

export function FormCadastro(props) {
  const validationSchema = useMemo(() => {
    return Yup.object({
      nome: Yup.string().required('Nome é obrigatório'),
      dosagem: Yup.string().required('Dosagem  é obrigatória'),
      laboratorio: Yup.string().required('Laboratório é obrigatório'),
    })
  }, [])

  return (
    <form className={styles.container}>
      <h2 className={styles.titulo}>Cadastrar medicamentos</h2>

      <input placeholder="Nome" className={styles.input} type="nome" />
      <input placeholder="Dosagem" className={styles.input2} type="dosagem" />
      <input placeholder="Laboratório" className={styles.input3} type="laboratorio" />
      <Button>CADASTRAR</Button>
    </form>
  )
}
