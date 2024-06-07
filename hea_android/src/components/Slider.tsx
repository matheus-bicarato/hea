import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    require('../../assets/explore.png'),
    require('../../assets/explore2.png'),
    require('../../assets/explore3.png'),
  ];
  const renderItem = ({ item, index }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.containerCarousel}>
      <Carousel
        layout="default"
        ref={carouselRef}
        data={images}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Text style={styles.text}>Imagem {activeIndex + 1} de {images.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    containerCarousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Slider;
