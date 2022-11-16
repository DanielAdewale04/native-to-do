import { StyleSheet } from "react-native"

export const mainAppStyle = StyleSheet.create({
    flexed: {
        gap: '50'
    },
    flexApart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
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
        marginTop: 25,
        backgroundColor: '#121212',
        paddingVertical: 12,
        paddingHorizontal: 17,
        borderRadius: 8,
        width: 340,
    },
    itemFont: {
        color: 'silver',
        fontSize: 17,
        lineHeight: 28
    },
    noItemMsg: {
        color: 'silver',
        fontSize: 17,
        textAlign: 'center'
    },
    imageWrap: {
        marginTop: 40,
        backgroundColor: '#121212',
        paddingVertical: 12,
        paddingHorizontal: 17,
        borderRadius: 8,
        width: 340,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    emptyImg: {
        width:100,
        height:100
    }
})

export const ModalStyle = StyleSheet.create({
    mainModal: {
        backgroundColor: '#161616',
        paddingTop: 120,
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})