import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 10,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    marginTop: 10,
    color: '#13131a',
    fontWeight: 'bold',
  },
  description: {
    color: '#21311b',
    fontSize: 18,
  },
  selectCity: {
    color: '#21311b',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    fontSize: 16,
    height: 44,
    marginBottom: 20,
  },
  seller: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
    marginTop: 28,
  },
  sellerTitle: {
    fontSize: 15,
    marginLeft: 4,
    color: '#21311b',
    fontWeight: 'bold',
  },
  sellerCategories: {
    color: '#21311b',
    marginTop: 10,
    fontSize: 15,
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  detailsButtonText: {
    color: '#4e6f26',
    fontSize: 15,
    fontWeight: 'bold',
  },
})
