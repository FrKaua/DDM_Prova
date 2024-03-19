import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import Kaua from './SRC/componentes/Kaua/main';
import Murilo from './SRC/componentes/Murilo';

export default function App() {
  return (
    <View style={styles.container}>
      <Murilo/>
      <Kaua/>

      
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
});
