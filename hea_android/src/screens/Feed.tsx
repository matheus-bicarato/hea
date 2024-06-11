import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import ProductCarousel from '../components/carousel/ProductCarousel';
import ProductCarouselBanners from '../components/carousel/ProductCarouselBanners';

export default function Feed() {
  const products = [
    {
      title: 'Produto 1',
      price: 'R$ 100,00',
      image: require('../../assets/Genericos/2.png'),
    },
    {
      title: 'Produto 2',
      price: 'R$ 200,00',
      image: require('../../assets/Genericos/2.png'),
    },
    {
      title: 'Produto 3',
      price: 'R$ 300,00',
      image: require('../../assets/Genericos/2.png'),
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
        <View style={styles.container}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/bannerApp1.jpeg')}
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
          <SafeAreaView style={styles.containerProduct}>
            <ProductCarousel products={products} />
          </SafeAreaView>
        </View>
        <View style={styles.Footer}>
          <Text style={styles.titleFooter}>Copyright © 2014 - 2024 - Health Point Saúde EIRELI - Todos os direitos reservados.</Text>
          <Text style={styles.titleFooter2}>Health Point Saúde EIRELI - CNPJ: 02.543.945/0006-90 | Santa Isabel/SP | IE: 130.762.850.113 | AFE: 780.2129 | SIVISA: 354680110-477-000062-1-1 - Farmacêuticas Responsáveis: Dra. Rose de Jesus Assis CRF-SP: 63.178 | Dra. Anadia Terezinha Barbosa CRF-SP 87.005 - End.: Est. Municipal Dep. Est. Francisco Franco, N° 1363-A – Santa Isabel – SP | Horários de Funcionamento: Loja CD - atendimento das 7h00 às 21h00 de segunda a sexta-feira, sábado das 07h00 às 13h00, localizada na Est. Municipal Dep. Est. Francisco Franco, 1363 – Santa Isabel – SP | Loja 3 - atendimento 24h, localizada na Av. Jabaquara, 1524 | Loja 7 – atendimento das 6h00 às 23h00, localizada na Av. Jabaquara 1583 | Outras lojas - atendimento das 7h00 às 22h00, localizadas na Av. Jabaquara, 1546 e 1625 | Site - 24 horas por dia, todos os dias da semana. As informações contidas neste site como promoções e ofertas, não devem ser usadas para automedicação e não substituem, em hipótese alguma, a medicação prescrita pelo profissional da área médica. Somente o médico está em condições de diagnosticar qualquer problema de saúde e prescrever o tratamento adequado. Qualquer dúvida sobre prescrição médica e produtos divulgados em nosso site, entre em contato através do atendimento por e-mail ou chat online. Se preferir, você poderá se dirigir a uma de nossas lojas, pois contamos com um profissional da área para maiores esclarecimentos.
            As fotos contidas em nosso site são meramente ilustrativas. Os preços e as promoções, são válidos apenas para compras via Internet. Preços e disponibilidade sujeitos a alterações no decorrer do dia ** As parcelas mínimas nos cartões que aceitam parcelamento são de R$ 20,00.</Text>
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
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
  },
  titleFooter: {
    fontSize: 9,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleFooter2: {
    fontSize: 7,
    textAlign: 'center',
  }
});
