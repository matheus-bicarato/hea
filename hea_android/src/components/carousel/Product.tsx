import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProductCarousel from './ProductCarousel';

const App = () => {
  const products = [
    {
      title: 'Produto 1',
      price: 'R$ 100,00',
      image: require('../../../assets/Genericos/2.png'),
    },
    {
      title: 'Produto 2',
      price: 'R$ 200,00',
      image: require('../../../assets/Genericos/2.png'),
    },
    {
      title: 'Produto 3',
      price: 'R$ 300,00',
      image: require('../../../assets/Genericos/2.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.containerProduct}>
      <ProductCarousel products={products} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    containerProduct: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
