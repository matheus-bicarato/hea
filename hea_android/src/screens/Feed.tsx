import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import ProductCarousel from '../components/carousel/ProductCarousel';
import ProductCarouselBanners from '../components/carousel/ProductCarouselBanners';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Feed() {
  const products = [
    {
      name: 'Óleo de Rícino',
      price: 'R$ 19.99',
      image: require('../../assets/beleza-img/3.png'),
    },
    {
      name: 'Allegra',
      price: 'R$ 69.99',
      image: require('../../assets/medicamentos/4.png'),
    },
    {
      name: 'Dove',
      price: 'R$ 10.99',
      image: require('../../assets/saude_e_bem_estar/3.png'),
    },
  ];

  const Banner = [
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
    <View>
      <ScrollView>
        <View >
          <View>
            <ProductCarouselBanners products={Banner} />
          </View>
          <View style={styles.container}>
            <View style={{ elevation: 10, borderColor: '#ddd', borderWidth: 2, marginTop: 10, borderRadius: 10, }}>
              <ImageBackground
                source={require('../../assets/fundoSeila.png')}
                style={{ width: 310, height: 130, borderRadius: 10, marginTop: 0, justifyContent: 'center', }}
              >
                <Text style={styles.title}>
                  Os produtos mais vendidos da nossa Farmacia estão transformando vida e superando expectativas em cada compra!
                </Text>
              </ImageBackground>
            </View>
            <SafeAreaView style={styles.containerProduct}>
              <ProductCarousel products={products} />
            </SafeAreaView>
          </View>
        </View>

        <View style={styles.Footer}>
          <TouchableOpacity><Ionicons name="logo-instagram" size={30} color="#fff" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="logo-twitter" size={30} color="#fff" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="logo-facebook" size={30} color="#fff" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="logo-whatsapp" size={30} color="#fff" /></TouchableOpacity> 
        </View>

      </ScrollView>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Carousel: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerProduct: {
    marginTop: 20,
  },
  Footer: {
    backgroundColor: '#5CB4C2',
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    marginTop: 10,
    padding: 10,
    flexDirection:'row',
  },
});
