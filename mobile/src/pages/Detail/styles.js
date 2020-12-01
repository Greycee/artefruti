import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'darkgreen',
    marginBottom: 10,
  },
  city: {
    color: '#737380',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  whatsappButton: {
    backgroundColor: '#2bb742',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
    padding: 15,
  },
  whatsappIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  whatsappText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
    borderColor: '#4e6f26',
    borderWidth: 1,
    borderRadius: 8,
  },
  productInfo: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    paddingTop: 20,
    flex: 0.6,
  },
  thumbnail: {
    width: 100,
    resizeMode: 'cover',
    flex: 0.4,
  },
  productKey: {
    color: '#4e6f26',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  productValue: {
    color: '#56565f',
    fontWeight: 'normal',
  },
})
