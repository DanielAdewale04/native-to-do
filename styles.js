import { StyleSheet } from "react-native"

export const mainAppStyle = StyleSheet.create({
    container: {
        paddingVertical: 70,
    },
    HeaderText: {
        color: 'silver',
        fontSize: 25,
        fontWeight: 'bold'
    },
    inputField: {
        marginVertical: 30,
        borderColor: 'grey',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 20,
        width: 300,
        color: '#fff',
        fontSize: 18,
        borderRadius: 4
    },
    mainItemWrap: {
        marginVertical: 20,
    },
    notifier: {
        color: 'grey'
    },
    itemWrap: {
        marginVertical: 10,
        backgroundColor: '#121212',
        paddingVertical: 12,
        paddingHorizontal: 17,
        borderRadius: 8,
        width: 'auto'
    },
    itemFont: {
        color: 'silver',
        fontSize: 17,
    },
    noItemMsg: {
        color: 'silver',
        fontSize: 17,
        textAlign: 'center'
    }
})