// components/ProductGallery.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Lip balm',
    price: 'R$ 68.99',
    image: require('../../assets/beleza-img/1.png'),
  },
  {
    id: 2,
    name: 'Better Me',
    price: 'R$ 13.99',
    image: require('../../assets/beleza-img/2.png'),
  },
  {
    id: 3,
    name: 'Óleo de Rícino',
    price: 'R$ 19.99',
    image: require('../../assets/beleza-img/3.png'),
  },
  {
    id: 4,
    name: 'Toca',
    price: 'R$ 13.99',
    image: require('../../assets/beleza-img/4.png'),
  },
];

const ProductGalleryBeleza = () => {
  const renderitens = ({ item }) => (
    <View style={styles.productContainer}>
      <TouchableOpacity><Image source={item.image} style={styles.image} /></TouchableOpacity>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.containerGallery}>
      <FlatList
        data={products}
        renderItem={renderitens}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerGallery: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  productContainer: {
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 8,
    
    
  },

  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductGalleryBeleza;
