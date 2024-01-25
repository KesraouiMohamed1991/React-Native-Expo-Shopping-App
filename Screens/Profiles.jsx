import React, { useState } from 'react';
import { View, Button, StyleSheet , Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AuthModal from '../Components/AuthModal';

const Profiles = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient
      colors={['rgb(199, 210, 254)', 'rgb(254, 202, 202)', 'rgb(254, 249, 195)']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.buttonContainer}
        >
          <Button color={colors.text} title="Log into account" onPress={openModal} />
        </LinearGradient>
        <AuthModal isVisible={modalVisible} onClose={closeModal} />
      </View>
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
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 20,

  },
});

export default Profiles;
