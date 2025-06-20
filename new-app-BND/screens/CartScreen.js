import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View, Image, Dimensions, Button } from "react-native-web";
import React,{useState,useEffect} from 'react';

const { width, height } = Dimensions.get('window');

const CartScreen = ({route}) => {

    const [cart,setCart]= useState([])

    useEffect(() => {
       const product  =route.params?.product;
         if(product && !cart.some(item => item.id === product.id)) {
            setCart([...Cart, product])
        }

    },[router.params?.product]);

    const plceOrder = () => {
        alert('Order Placed ');
    }


    return (
        <View style={styles.container}>
           <FlatESList
                       data={cart}
                       keyExtractor={(item) => item.id}
                       renderItem={({ item }) => (
                           <View style={styles.itemContainer}>
                               <Text style={styles.text}>{ item.name}</Text>
                               <Text style={styles.text}>${item.price}</Text>
                               <Image source={{ uri: product.image }} style={style.image} />          
                           </View>
                       )}
                       ListEmptyComponent={<Text>your cart id Empty</Text>}
                       />
                       <Button
                        title="Place Order(DOC)"
                        onPress={plceOrder}
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
   itemContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.1,
        margin: 10,
        padding: 10,
        borderRdius: 10,
        backeroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { 
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    },
    image: {
        width: width*0.2, // Adjust width to fit within the container
        height: height50*0.1,
        borderRdius: 10,
    },
   
});


export default CartScreen;