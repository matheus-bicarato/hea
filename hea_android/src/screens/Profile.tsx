import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Slider from '../components/Slider';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('principal')}>
        <Image source={require('../../assets/Hea.png')} style={{ width: 210, height: 100 }} />
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#999" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry placeholderTextColor="#999" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('principal')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99D8DD',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 20,
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 80,
    marginBottom: 60,
    textAlign: 'center',
    letterSpacing: 10,
  },
  input: {
    width:'100%' ,
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    textAlign: 'center',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 3,
  },
});
