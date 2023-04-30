import { Image, Text, View, Button } from "react-native";
import styles from "./style";

const apiSource = 'https://api.otaviolube.com'
export default function Filme(props){
    return(
        <View style={styles.container}>
            <View style={styles.ssimg}>
                <Image style={styles.img} source={{uri: apiSource + props.filme.attributes.poster.data.attributes.url}} />
            </View>
            <View style={styles.body}>
                <Text style={styles.titulo}>{props.filme.attributes.titulo}</Text>
                <Text style={styles.sinop} numberOfLines={7} ellipsizeMode="tail" >{props.filme.attributes.sinopse}</Text>
                <Button style={styles.botao}title="Comprar"></Button>
            </View>
        </View>
    )
}
