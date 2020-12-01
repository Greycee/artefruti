import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import api from '../../services/api'
import logo from '../../assets/logo.png'
import styles from './styles'

export default function Display() {
  const [sellers, setSellers] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const navigation = useNavigation()

  function navigateToDetail(seller) {
    navigation.navigate('Detail', { seller })
  }

  async function loadSellers() {
    const response = await api.get('/sellers')
    setSellers(response.data)
  }

  useEffect(() => {
    loadSellers()
  }, [selectedCity])

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Encontre o que você precisa e compre direto do pequeno produtor local!
      </Text>

      <Text style={styles.selectCity}>Sua cidade:</Text>
      <TextInput
        style={styles.input}
        value={selectedCity}
        onChangeText={(city) => setSelectedCity(city)}
      />

      <FlatList
        data={sellers}
        style={styles.sellersList}
        keyExtractor={(seller) => String(seller._id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadSellers}
        onEndReachedThreshold={0.2}
        renderItem={({ item: seller }) =>
          seller.city == selectedCity && (
            <View style={styles.seller}>
              <Text style={styles.sellerTitle}>
                {seller.name} {seller.lastName}
              </Text>

              <Text style={styles.sellerCategories}> {seller.categories} </Text>

              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => navigateToDetail(seller)}
              >
                <Text style={styles.detailsButtonText}>
                  {' '}
                  Ver mais detalhes{' '}
                </Text>
                <Feather name="arrow-right" size={16} color="#4e6f26" />
              </TouchableOpacity>
            </View>
          )
        }
      />
    </View>
  )
}
