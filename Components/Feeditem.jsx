// Feeditem.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../reducers/shop';




const Feeditem = ({ title, img, description, price,id }) => {
  const cart = useSelector((state) => state.shop)

  const dispatch = useDispatch()

 const hundleadding = () => {
    dispatch(addToCart({ title, img, description, price, id }));
    console.log(cart);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: img }} style={styles.image} />
      <Text style={styles.title}>{title.slice(0,20)}</Text>
      <Text style={styles.desc}>{description.slice(0,80)}</Text>
      <Text style={styles.price}>{price}$</Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={hundleadding}>
          <Text style={styles.buttonText}>Add 🛒</Text>
        </TouchableOpacity>

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
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Center items vertically
    width: 300,
    marginBottom:10,
    marginRight: 10,
    height:350,

  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  desc: {
    padding: 8,
    width: '100%',
    backgroundColor: 'white',
    fontSize: 10,
  },
  price: {
    padding: 10,
    justifyContent: 'center',
    width: '50%',
  },
  title: {
    padding: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: colors.text,
    width: '60%',

    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 10, // Add some space between the price and the button
   paddingVertical:10,
  },
  buttonText: {
    padding: 4,
    textAlign: 'center',
    color:colors.background,

  },
  btnContainer: {
    width: '100%',
      justifyContent: 'center',
    alignItems:'flex-start',
  }
});

export default Feeditem;
