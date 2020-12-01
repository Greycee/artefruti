import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default function Register() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [categories, setCategories] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      name,
      lastName,
      email,
      code,
      whatsapp,
      city,
      uf,
      categories,
    }

    try {
      api.post('/sellers', data)
      alert('Dados cadastrados com sucesso!')
    } catch (err) {
      alert('Erro no cadastro. Tente novamente.')
    }
  }

  return (
    <div className="registration-container">
      <section className="title">
        <h2>Artefruti</h2>
        <h1>Cadastre-se! É grátis.</h1>
        <Link className="back-link" to="/">
          Voltar
        </Link>
      </section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            id="lastName"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <input
            type="text"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="code"
            maxLength="2"
            placeholder="DDD"
            style={{ width: 80 }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <input
            type="number"
            id="whatsapp"
            placeholder="WhatsApp"
            style={{ width: 510 }}
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            id="city"
            placeholder="Cidade"
            style={{ width: 510 }}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="text"
            id="uf"
            placeholder="UF"
            value={uf}
            style={{ width: 80 }}
            maxLength="2"
            onChange={(e) => setUf(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="categories">
            QUAL SEU TIPO DE PRODUTO? <span>(Separado por vírgula)</span>
          </label>
          <input
            type="text"
            id="categories"
            placeholder="Ex: Orgânico, Artesanato, Vegano, Sem Lactose"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>

        <button type="submit" className="button">
          Cadastrar
        </button>
      </form>
    </div>
  )
}
