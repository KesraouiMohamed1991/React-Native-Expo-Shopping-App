// import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromCart} from '../reducers/shop'
import { useFonts } from 'expo-font';

// create a component
const CartItem = ({ title, img, price, id }) => {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
  });
  const dispatch = useDispatch()
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

    const hundleDelete = (title) => {
        dispatch(removeFromCart({ title }));
        console.log(title);
    
}

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: img }} style={styles.image} />
      </View>
          <View style={styles.textWrapper}>
              <View style={styles.priceContainer}>
                 <Text style={styles.title}>{title.slice(0, 20)}</Text>
                <Text style={styles.price}>{price}$</Text>
              </View>

              
                <View style={styles.removeContainer}>
                <TouchableOpacity style={styles.button} onPress={() => { hundleDelete(title) }}>
                <Text style={styles.buttonText}>Remove 🗑️</Text>
                </TouchableOpacity>
              </View>
      </View>
    </View>
  );
};

const colors = {
  text: '#010e17',
  background: '#f9fcff',
  primary: '#2196f7',
  secondary: '#fa78b9',
  accent: '#f9754e',
};

const styles = StyleSheet.create({
container: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor: '#e0e0e2',
  overflow: 'hidden',
  color: 'white',
  height: 80,
  borderRadius: 8,
  fontFamily: 'Poppins-Regular',




    },
    image: {
    width: '100%',
    height: 80,
    resizeMode: 'cover',

    },
    imageContainer: {
    width: '40%',


    },
    textWrapper: {
    width: '60%',
    flexDirection:'row',
    height: 80,
    padding: 8,
    justifyContent: 'space-between',
    borderRadius: 8,

    },
    title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
    },
    price: {
    color: colors.text,
    fontSize: 14,
    },
    button: {
    backgroundColor: colors.text,
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    textAlign: 'center',
    paddingVertical:8,
    },

    buttonText: {
    padding: 4,
    textAlign: 'center',
    color:colors.background,

    },
    btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    },
    priceContainer: {
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'flex-start',
    },

    removeContainer: {
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',

    }
    });

export default CartItem;
