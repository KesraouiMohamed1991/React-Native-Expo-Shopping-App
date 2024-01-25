import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient
import Feeditem from '../Components/Feeditem';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchedItem, setSearchedItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (search.trim().length > 0) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setLoading(false);
            setError(false);
            setSearchedItem(data);
            setSearch('');
          }
        })
        .catch(() => {
          setError(true);
        });
    }
  };

  useEffect(() => {
    // Additional logic can be added here if needed
  }, [search]);

  const renderItem = ({ item }) => (
    <Feeditem title={item.title} img={item.thumbnail} description={item.description} price={item.price} />
  );

  return (
    <LinearGradient

      
      colors={['rgb(199, 210, 254)', 'rgb(254, 202, 202)', 'rgb(254, 249, 195)']}
      style={styles.gradientContainer} // Apply gradient to the entire container
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.textFeed}>Search your product</Text>
        <SafeAreaView style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setSearch(value)}
            value={search}
            placeholder="Search your product..."
            placeholderTextColor="black" // Set the placeholder text color

          />
          {loading && <ActivityIndicator />}
          {error && <Text style={styles.error}>Try another product</Text>}

          {searchedItem && searchedItem.products && searchedItem.products.length === 0 && (
            <Text style={styles.error}>Try another product</Text>
          )}
          {search.length > 0 && (
            <TouchableOpacity style={styles.btn} onPress={handleSearch}>
              <Text style={styles.btnText}>Search 🔍</Text>
            </TouchableOpacity>
          )}


          <FlatList
            style={styles.flat}
            data={searchedItem.products}
            keyExtractor={(item) => String(item.id)}
            renderItem={renderItem}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContent}
          />
        </SafeAreaView>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Set the background color to transparent
  },
  textFeed: {
    fontSize: 30,
    fontWeight:'bold',
    color: 'rgb(254, 249, 195)', // Use your desired color
    marginVertical: 40,
  },
  searchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
input: {
  height: 40,
  borderColor: 'black', // Set the border color
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  width: '80%',
  borderRadius: 10,
  color: 'rgb(254, 249, 195)', // Set the text color
},

  flat: {
    flex: 1,
    width: '100%',
    // backgroundColor: colors.background,
    height: '50%',
  },
  flatListContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: colors.accent,
  },
  btn: {
    backgroundColor: colors.text,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  btnText: {
     color: 'rgb(254, 249, 195)', // Set the text color

    fontSize: 18,
  },
});

export default Search;
