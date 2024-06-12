// components/ProductGallery.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Pamper',
    price: 'R$ 12.99',
    image: require('../../assets/Infantil/1.png'),
  },
  {
    id: 2,
    name: 'Gohmsonis',
    price: 'R$ 30.99',
    image: require('../../assets/Infantil/2.png'),
  },
  {
    id: 3,
    name: 'bepantol',
    price: 'R$ 18.99',
    image: require('../../assets/Infantil/3.png'),
  },
  {
    id: 4,
    name: 'Chupeta',
    price: 'R$ 2.99',
    image: require('../../assets/Infantil/4.png'),
  },
];

const ProductGalleryInfantil = () => {
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

export default ProductGalleryInfantil;
