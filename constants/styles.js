import { Dimensions, StyleSheet } from 'react-native';

var { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    swiper: {
        width: width,
        alignItems: "center"
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    },
    categories: {
        width: width,
        borderRadius: 20,
        paddingVertical: 20,
        backgroundColor: 'white'
    },
    titleCatg: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    divCategories: {
        backgroundColor: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        borderRadius: 10
    },
    divFood: {
        width: (width / 2) - 20,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
        backgroundColor: 'white',
    },
    imageFood: {
        width: ((width / 2) - 20) - 10,
        height: ((width / 2) - 20) - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
        borderRadius: ((width / 2))
    },
    imageBackground: {
        width: ((width / 2) - 20),
        height: ((width / 2) - 20),
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;