import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, ActivityIndicator, ImageBackground } from 'react-native';
import Feeditem from '../Components/Feeditem';
import { useFonts } from 'expo-font';

const Feed = () => {
  const [dataContent, setDataContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(false)
      try {
        const response = await fetch('https://dummyjson.com/products?page=1&limit=50'); 
        const data = await response.json();
        if (data) {
          setDataContent(data);
          console.log(data);
          setLoading(false)
          setError(false)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true)
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Feeditem title={item.title} img={item.thumbnail} description={item.description} price={item.price} id={item.id} />
  );

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../assets/logo.jpg')} style={styles.back} />
      <View style={styles.textHolder}>
        <Text style={styles.textFeed}>Your List of Product</Text>
        {loading && <ActivityIndicator />}
        {error && <Text style={styles.error}>Problem with fetching data</Text>}
      </View>
      <FlatList
        style={styles.flat}
        data={dataContent.products}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    fontFamily: 'Poppins-Regular',
  },

  back: {
    height: 70,
    width: '100%',
    marginTop: 60,
  },
  textFeed: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#393838',
    fontFamily: 'Poppins-Regular',

  },
  textHolder: {
    width: '100%',
    marginTop: 20,
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',

  },
  flat: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
    marginHorizontal: 10,
  },
  flatListContent: {
    alignItems: 'center',
  },
  error: {
    color: colors.accent,
  },
});

export default Feed;
