import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ProductCarouselBanners from '../components/carousel/ProductCarouselBanners';
import ProductGalleryGenericos from '../components/ProductGalleryGenericos';

export default function Genericos() {

  const Banner= [
    {
      
      image: require('../../assets/bannerApp1.jpeg'),
    },
    {
      
      image: require('../../assets/bannerApp2.png'),
    },
    {
      
      image: require('../../assets/bannerApp3.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.containerBanner}>
        <ProductCarouselBanners products={Banner} />
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBanner: {
    // backgroundColor: 'black',
  },
});
