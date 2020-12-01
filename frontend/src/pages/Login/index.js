import React, { useState } from 'react'
import phone from '../../assets/phone.png'

import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const response = await api.post('sessions', { email })
      localStorage.setItem('producerId', response.data.id)
      localStorage.setItem('producerName', response.data.name)
      history.push('/profile')
    } catch (err) {
      alert('Falha no login. Tente novamente.')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <h2>Artefruti</h2>
        <p>A vitrine do pequeno produtor</p>
        <img
          className="img-mobile"
          src={phone}
          alt="phone displaying half od the app and half of a box of organic products"
        />
        <form style={{ width: 'inherit' }} onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img
        className="img-desktop"
        src={phone}
        alt="phone displaying half od the app and half of a box of organic products"
      />
    </div>
  )
}
