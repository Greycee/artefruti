import React, { useState, useEffect, useMemo } from 'react'
import { Link, useHistory } from 'react-router-dom'
import camera from '../../assets/camera.svg'
import api from '../../services/api'
import './styles.css'

export default function EditProduct() {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [type, setType] = useState('')

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null
  }, [image])

  const history = useHistory()
  const productInfo = history.location.state

  useEffect(() => {
    const { title, description, value, type } = productInfo
    setImage(image)
    setTitle(title)
    setDescription(description)
    setValue(value)
    setType(type)
  }, [productInfo])

  async function handleEditedProduct(e) {
    e.preventDefault()

    const data = new FormData()

    data.append('image', image)
    data.append('title', title)
    data.append('description', description)
    data.append('value', value)
    data.append('type', type)

    await api.put(`/products/${productInfo._id}`, data)

    history.push('/profile')
  }
  return (
    <div className="edit-container">
      <section className="title">
        <h2>Artefruti</h2>
        <h1>Editar produto</h1>
        <Link className="back-link" to="/profile">
          Voltar
        </Link>
      </section>
      <form onSubmit={handleEditedProduct}>
        <label
          id="image"
          style={{ backgroundImage: `url(${preview})` }}
          className={image ? 'background-image' : ''}
        >
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <img src={camera} alt="Selecione uma imagem" />
        </label>
        <label htmlFor="title">PRODUTO</label>
        <input
          type="text"
          id="title"
          placeholder="O que você vende?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">DESCRIÇÃO</label>
        <textarea
          type="text"
          id="description"
          placeholder="Algo extra que os clientes deveriam saber sobre esse produto?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="value">PREÇO</label>
        <input
          type="number"
          id="value"
          placeholder="0,00"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input-radio">
          <input
            type="radio"
            id="un"
            value="unidade"
            checked={type === 'unidade'}
            onChange={(e) => setType(e.target.value)}
          />
          <label>Preço por unidade</label>
        </div>
        <div className="input-radio">
          <input
            type="radio"
            id="kg"
            value="kg"
            checked={type === 'kg'}
            onChange={(e) => setType(e.target.value)}
          />
          <label>Preço por Kg</label>
        </div>
        <div className="input-radio">
          <input
            type="radio"
            id="100g"
            value="100g"
            checked={type === '100g'}
            onChange={(e) => setType(e.target.value)}
          />
          <label>A cada 100 gramas</label>
        </div>
        <button type="submit" className="button">
          Alterar
        </button>
      </form>
    </div>
  )
}
