import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import { useFonts } from 'expo-font';


const Mix = () => {


  const cart = useSelector((state) => state.shop.value);
  let total = 0;

  if (cart.length > 0) {
    cart.forEach((e) => {
      total += e.price;
    });
  }
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
  });

 if (!fontsLoaded) {
    // Font is not yet loaded, render a loading indicator or a fallback
    return <ActivityIndicator />;
  }
  const renderItem = ({ item }) => (
    <CartItem title={item.title} img={item.img} id={item.id} price={item.price} />
  );

  return (
    <LinearGradient
      colors={['rgb(199, 210, 254)', 'rgb(254, 202, 202)', 'rgb(254, 249, 195)']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.textHead}>Cart </Text>
          {cart.length > 0 && <Text style={styles.indice}>{cart.length}</Text>}
        </View>
        <View>
          {cart.length > 0 && (
            <Text style={styles.total}>
              Your cart total is : <Text style={{ color: colors.accent }}>{total}$</Text>{' '}
            </Text>
          )}
        </View>
        <View>
          {cart.length > 0 && (
            <TouchableOpacity style={styles.btnContainer}>
              <Text style={styles.buttonText}>Check out 💳</Text>
            </TouchableOpacity>
          )}
        </View>

        {cart.length > 0 ? (
          <FlatList
            style={styles.flat}
            data={cart}
            keyExtractor={(item) => item.title}
            renderItem={renderItem}
            horizontal={false}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={styles.flatListContent}
          />
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty ☹︎ </Text>
        )}
      </SafeAreaView>
    </LinearGradient>
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
  gradientContainer: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    fontFamily: 'Poppins-Regular',

  },
  textHead: {
    color: colors.text,
    fontSize: 20,
    marginTop: 10,
  },
  flat: {
    flex: 1,
    width: '100%',
    height: '50%',
  },
  flatListContent: {
 alignItems: 'center',
  justifyContent: 'center',
  gap: 10,

  },
  emptyCartText: {
    color: colors.text,
    fontSize: 16,
    marginTop: 20,
    fontWeight:'bold'
    },
  
  indice: {
    fontSize: 10,
    color: colors.background,
    backgroundColor: colors.text,
    display: 'flex',
    height: 20,
    width: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', // Center the text horizontally
    lineHeight: 20, // Center the text vertically
  },
  head: {
    marginTop: 20,
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    marginBottom: 10,
  },
  buttonText: {
    padding: 10,
    textAlign: 'center',
    color: colors.background,
  },
  btnContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.text,
    marginBottom: 10,
    borderRadius: 6,
  },
});

export default Mix;
