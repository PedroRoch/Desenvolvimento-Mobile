import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './Filme';

export default function App() {

  let [filmes, setFilmes] = useState([])

  const apiUrl = 'https://api.otaviolube.com/api/filmes?populate=*'

  useEffect(function(){
    fetch(apiUrl)
      .then(data => data.json())
      .then(objeto => {
        console.log(objeto)
        setFilmes(objeto.data)
      })
  }, []);

  return (
    <View style={styles.container}>
      { filmes.length > 0 ? filmes.map(filme => <Filme filme={filme}/>)
         : <Text>Carregando...</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#027',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
