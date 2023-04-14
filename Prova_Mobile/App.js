import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RPG from './SCR/RPG';

export default function App() {

  const cards = [
    {
      name: "Sprit Sword",
      url: "https://i.pinimg.com/originals/18/fd/ea/18fdeadbc21cc4e20fe1d7ed6563db94.png",
      desc: "Uma espada sagrada capaz de cortar através do mal com sua energia divina causando dano Imenso ao Inimigo.",
    },
    {
      name: "Senzu Bean",
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dcjzw04-c25a75ea-62b5-4b44-ae6f-e89da9f0c39c.png/v1/fill/w_426,h_500/senzu_bean_render__dokkan_battle__by_maxiuchiha22_dcjzw04-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kY2p6dzA0LWMyNWE3NWVhLTYyYjUtNGI0NC1hZTZmLWU4OWRhOWYwYzM5Yy5wbmciLCJ3aWR0aCI6Ijw9NDI2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.XG-pAYBT5U7I0vSPFr5i1Bf3dHUTypgcGIPi0RJM854",
      desc: "Item raro e poderoso que pode curar completamente as feridas do usuário e restaurar sua energia.",
    },
    {
      name: "Saiyan Armor",
      url: "https://jctunesmusic.files.wordpress.com/2013/08/508945-saiyan_armor_cell_saga_large.png",
      desc: "Uma armadura resistente e durável que oferece uma proteção significativa ao usuário.",
    },
  ];

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <RPG key={index} card={card} />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#407a85',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
