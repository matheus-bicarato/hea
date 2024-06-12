import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import ProductCarouselBanners from '../components/carousel/ProductCarouselBanners';
import ProductGalleryInfantil from '../components/ProductGalleryInfantil';

export default function Infantil() {

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
      <ScrollView>
      <SafeAreaView style={styles.containerBanner}>
        <ProductCarouselBanners products={Banner} />
      </SafeAreaView>
      
      <SafeAreaView>
        <ProductGalleryInfantil/>
      </SafeAreaView>
      </ScrollView>
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
