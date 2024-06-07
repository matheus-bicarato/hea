import { StyleSheet, Text, View, TextInput } from 'react-native';
import Slider from '../components/Slider';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99D8DD',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },

});
