import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default function Profile() {
  const history = useHistory()
  const [products, setProducts] = useState([])
  const producerId = localStorage.getItem('producerId')
  const producerName = localStorage.getItem('producerName')

  useEffect(() => {
    api
      .get('profile', {
        headers: { seller_id: producerId },
      })
      .then((response) => {
        setProducts(response.data)
      })
  }, [producerId])

  async function handleDeleteProduct(_id) {
    try {
      await api.delete(`/products/${_id}`, {
        headers: { seller_id: producerId },
      })
      setProducts(products.filter((product) => product._id !== _id))
    } catch (err) {
      alert('Erro ao deletar caso. Tente novamente.')
    }
  }

  async function handleEditProduct(data) {
    history.push('/products/edit', data)
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="profile-container">
      <header>
        <h2>Artefruti</h2>
        <span>Vamos colocar seus produtos na vitrine, {producerName}</span>
        <Link to="/products/new" className="button">
          Cadastrar novo produto
        </Link>
        <button onClick={handleLogout} type="button">
          Sair
        </button>
      </header>
      <h1>Produtos já cadastrados:</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <header
              style={{
                backgroundImage: `url(${product.image_url})`,
              }}
            />
            <div className="product-item">
              <strong>PRODUTO: </strong>
              <p style={{ display: 'contents' }}>
                {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
              </p>
            </div>

            <div className="product-item">
              <strong>{product.description == null ? '' : 'DESCRIÇÃO:'}</strong>
              <p style={{ display: 'contents' }}>{product.description}</p>
            </div>

            <div className="product-item">
              <strong>VALOR:</strong>
              <p style={{ display: 'contents' }}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.value)}
                / {product.type}
              </p>
            </div>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              type="button"
            >
              Excluir
            </button>
            <button onClick={() => handleEditProduct(product)} type="button">
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
