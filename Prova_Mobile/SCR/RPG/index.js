import { Button, Image, Text, View } from "react-native";
import styles from "./styles"

export default function RPG(props) {

    return (
        <View style={styles.card}>
            <View style={styles.card__img}>
                <Image 
                    source={{uri: props.card.url}} 
                    style={styles.img}
                />
            </View>
            <Text style={styles.name}>{props.card.name}</Text>
            <View style={styles.card__content}>
                <View style={styles.content}>
                    <Text style={styles.desc}>{props.card.desc}</Text>
                    <Button title="Trocar"/>
                </View>
            </View>
        </View>
    );
}