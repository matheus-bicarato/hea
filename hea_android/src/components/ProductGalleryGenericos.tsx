// components/ProductGallery.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Produto 1',
    price: 'R$ 100,00',
    image: require('../../assets/Genericos/1.png'),
  },
  {
    id: 2,
    name: 'Produto 2',
    price: 'R$ 150,00',
    image: require('../../assets/Genericos/1.png'),
  },
  {
    id: 3,
    name: 'Produto 3',
    price: 'R$ 200,00',
    image: require('../../assets/Genericos/1.png'),
  },
];

const ProductGallery = () => {
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productContainer: {
    marginBottom: 16,
    borderWidth: 1,
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

export default ProductGallery;
