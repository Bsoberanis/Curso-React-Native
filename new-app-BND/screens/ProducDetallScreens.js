import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Image, Dimensions, Button } from "react-native-web";

const { width, height } = Dimensions.get('window');

const ProductDetailsScreen = ({route,navigation}) => {
    const { product } = route.params;
    return (
        <View style={style.container}>
                    <Image source={{ uri: product.image }} style={style.image} />
                    <Text style={styles.mame}>{ item.name}</Text>
                    <Text style={styles.price}>${product.price}</Text>

                     <Button
                        title="Add to Cart"
                        onPress={() => navigation.navigate('Cart', { product: item })}
                           />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
     image:{
        width: width*0.9, // Adjust width to fit within the container
        height: width*0.5,
        marginBottom: 10,
        //borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 0.2,
        borderRadius: 20,
    },
     text: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
    price: {
        fontSize: 20,
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
    },
    
});
export default ProductDetails;