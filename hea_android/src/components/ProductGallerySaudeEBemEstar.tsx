// components/ProductGallery.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet,TouchableOpacity, VirtualizedList } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Forever hair',
    price: 'R$ 70.00',
    image: require('../../assets/saude_e_bem_estar/1.png'),
  },
  {
    id: 2,
    name: 'Gummy',
    price: 'R$ 19.99',
    image: require('../../assets/saude_e_bem_estar/2.png'),
  },
  {
    id: 3,
    name: 'Dove',
    price: 'R$ 10.99',
    image: require('../../assets/saude_e_bem_estar/3.png'),
  },
  {
    id: 4,
    name: 'Colgate',
    price: 'R$ 1.99',
    image: require('../../assets/saude_e_bem_estar/4.png'),
  },
];

const ProductGallerySaudeEBemEstar = () => {
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

export default ProductGallerySaudeEBemEstar;
