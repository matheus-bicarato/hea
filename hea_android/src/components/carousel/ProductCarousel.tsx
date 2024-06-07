import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const ProductCarousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imageProduct} />
        <Text style={styles.titleProduct}>{item.title}</Text>
        <Text style={styles.priceProduct}>{item.price}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={products}
      renderItem={renderItem}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth * 0.75}
      onSnapToItem={(index) => setActiveIndex(index)}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 300,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  imageProduct: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  titleProduct: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  priceProduct: {
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ProductCarousel;
