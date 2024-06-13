// components/ProductGallery.js
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, VirtualizedList, Dimensions } from 'react-native';

const products = [
  {
    id: 1,
    name: 'Principia',
    price: 'R$ 70.00',
    image: require('../../assets/Produtos-diarios/1.png'),
  },
  {
    id: 2,
    name: 'Esfoliante Facia',
    price: 'R$ 19.99',
    image: require('../../assets/Produtos-diarios/2.png'),
  },
  {
    id: 3,
    name: 'Nivea',
    price: 'R$ 30.99',
    image: require('../../assets/Produtos-diarios/3.png'),
  },
  {
    id: 4,
    name: 'Hidratante',
    price: 'R$ 24.99',
    image: require('../../assets/Produtos-diarios/4.png'),
  },
];

const ProductGalleryCuidadosDiarios = () => {
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
        numColumns={2} // Define o número de colunas
        columnWrapperStyle={styles.itens}
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
    flex: 1,
    margin: 8, // Margem ao redor de cada item
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center', 
  },
  itens: {
    flex: 1,
    justifyContent: 'space-between',
  },

  image: {
    width: (Dimensions.get('window').width / 2) - 48, // Ajusta a largura da imagem para caber na coluna
    height: 150, // Altura da imagem
    marginBottom: 8,

  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductGalleryCuidadosDiarios;
