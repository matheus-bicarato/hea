import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const ProductCarousel = ({ products }) => {
  const renderItem = ({ item }) => (
    <View style={styles.slideProducts}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.imageProducts} />
      </TouchableOpacity>
      <Text style={styles.titleProducts}>{item.title}</Text>
      <Text style={styles.priceProducts}>{item.price}</Text>
      <TouchableOpacity style={styles.BottonProducts} >
        <Text style={styles.BottonProducts}>Compre Aqui!!</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <Carousel
      loop
      width={viewportWidth}
      height={300}
      autoPlay={true}
      data={products}
      scrollAnimationDuration={4000}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  slideProducts: {
    backgroundColor: '#fff',
    borderRadius: 8,
    height: 300,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    alignItems:'center',
  },
  BottonProducts: {
    width: 220,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',

  },
  imageProducts: {
    // width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  titleProducts: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  priceProducts: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProductCarousel;
