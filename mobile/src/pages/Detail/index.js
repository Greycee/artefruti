import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import whats from '../../assets/whats.png'
import styles from './styles'

export default function Detail() {
  const [products, setProducts] = useState([])
  const navigation = useNavigation()
  const route = useRoute()
  const seller = route.params.seller
  const sellerId = seller._id
  const message = `Olá, ${seller.name}! Entro em contato pois vi seus produtos anunciados no *Artefruti* e tenho inetresse em fazer uma compra.`

  useEffect(() => {
    api
      .get('profile', {
        headers: { seller_id: sellerId },
      })
      .then((response) => {
        setProducts(response.data)
      })
  }, [sellerId])

  function navigateBack() {
    navigation.goBack()
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone=55-${seller.code}${seller.whatsapp}&text=${message}`,
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#21311b" />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>
        {seller.name} {seller.lastName}
      </Text>
      <Text style={styles.city}>
        {seller.city}/{seller.uf}
      </Text>
      <TouchableOpacity style={styles.whatsappButton} onPress={sendWhatsapp}>
        <Image source={whats} style={styles.whatsappIcon} />
        <Text style={styles.whatsappText}>Entre em contato por WhatsApp</Text>
      </TouchableOpacity>

      {products.map((product) => (
        <View key={product._id} style={styles.product}>
          <Image style={styles.thumbnail} source={{ uri: product.image_url }} />
          <View style={styles.productInfo}>
            <Text style={styles.productKey}>
              PRODUTO: <Text style={styles.productValue}>{product.title}</Text>
            </Text>

            <Text style={styles.productKey}>
              DESCRIÇÃO:{' '}
              <Text style={styles.productValue}>{product.description}</Text>
            </Text>

            <Text style={styles.productKey}>
              VALOR:{' '}
              <Text style={styles.productValue}>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.value)}
                /{product.type}
              </Text>
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
