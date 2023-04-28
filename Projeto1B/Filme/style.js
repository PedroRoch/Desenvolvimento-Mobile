import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width: '95%',
        height: '30%',
        backgroundColor: '#629AC4',
        borderRadius: 5,
        marginBottom: 10
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 5
    },
    vimg: {
        width: '30%',
        height: '100%',
        padding: 8
    },
    body:{
        padding:8,
        width: '68%'
    },
    sinop:{
        color: '#fff',
        backgroundColor: '#463D82',
        borderRadius: 10,
        padding: 4,
        marginVertical: 4,
    },
    titulo:{
        fontWeight: 'bold' ,
        fontSize: 32,
        borderRadius: 2,
        backgroundColor: '#463D82',
        color: '#fff',
        flex: 1,
        textAlign: "center"
    },
    botao:{
        backgroundColor: "red"
    }
})

export default styles
