import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth } = Dimensions.get('window');

const ProductCarouselBanners = ({ products }) => {
  const renderItemBanners = ({ item }) => (
    <View style={styles.slideBanner}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.imageBanner} />
      </TouchableOpacity>

    </View>
  );

  return (
    <Carousel
      loop
      width={viewportWidth}
      height={310}
      autoPlay={true}
      data={products}
      scrollAnimationDuration={4000}
      renderItem={renderItemBanners}
    />
  );
};

const styles = StyleSheet.create({
  slideBanner: {
    backgroundColor: '#fff',
    // borderRadius: 8,
    // height: 310,
    // padding: 20,
    // marginLeft: 25,
    // marginRight: 25,
    alignItems: 'center',
  },
  imageBanner: {
    width: 310,
    height: 300,
    borderRadius: 10,
    marginTop: 10,

    // resizeMode: 'contain',
  },
});

export default ProductCarouselBanners;
