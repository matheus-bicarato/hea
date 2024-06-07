import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';
import Product from '../components/carousel/Product';


export default function Feed() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../../assets/bannerApp.jpeg')}
          style={{ width: 310, height: 300, borderRadius: 10, marginTop: 10, }}
        />
      </TouchableOpacity>
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
      <SafeAreaView style={styles.Carousel}>
        <Product />
      </SafeAreaView>
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

});
