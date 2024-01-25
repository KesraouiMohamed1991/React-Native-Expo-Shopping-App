import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, SafeAreaView,ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const Settings = () => {
  const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
  });
 if (!fontsLoaded) {
    // Font is not yet loaded, render a loading indicator or a fallback
    return <ActivityIndicator />;
  }
  const handleGoToTabNavigator = () => {
    console.log('Button clicked');
    navigation.navigate('TabNavigator');
  };

  return (
    <LinearGradient
      colors={['rgb(199, 210, 254)', 'rgb(254, 202, 202)', 'rgb(254, 249, 195)']}
      style={styles.gradientContainer}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}> */}
          <View style={styles.container}>
            <Text style={styles.text}>Welcome </Text>
            <Text style={styles.text}>to SmartShop 👋🏻</Text>
            <TouchableOpacity onPress={() => handleGoToTabNavigator()} style={styles.button} activeOpacity={0.8}>
              <Text style={styles.textButton}>Explore 💫</Text>
            </TouchableOpacity>
          </View>
        {/* </ImageBackground> */}
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
    fontFamily: 'Poppins-Regular',

  },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%', // Ensure the background takes up the entire width
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the background color or opacity if needed
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',

  },
  text: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.text,
    fontFamily: 'Poppins-Regular',

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    backgroundColor: 'rgb(254, 249, 195)', // Use your desired color
    
    borderRadius: 10,
    paddingVertical: 15,
    marginBottom: 80,
  },
  textButton: {
    color:colors.text,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',

  },
});

export default Settings;
