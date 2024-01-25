import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button } from 'react-native';

const AuthModal = ({ isVisible, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = () => {
    // Implement your login or sign-up logic here
    if (isLogin) {
        // Handle login
        
    } else {
      // Handle sign-up
    }

    // After submission, you may want to close the modal
    onClose();
  };








  const handleRegister = () => {
    
    
    fetch("http://localhost:3000/users/signup", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: signUpUsername,
				password: signUpPassword,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, token: data.token }));
					setSignUpUsername("");
					setSignUpPassword("");
					setIsModalVisible(false);
				}
			});
	};

	const handleConnection = () => {
		fetch("http://localhost:3000/users/signin", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: signInUsername,
				password: signInPassword,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.result) {
					dispatch(login({ username: signInUsername, token: data.token }));
					setSignInUsername("");
					setSignInPassword("");
					setIsModalVisible(false);
				}
			});
	};




  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          {!isLogin && (
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{ borderBottomWidth: 1, marginBottom: 10 }}
            />
          )}
          <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleSubmit} />
          <Text style={{ marginVertical: 10, textAlign: 'center', color: 'black',backgroundColor:"yellow" }} onPress={handleToggleForm}>
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

export default AuthModal;
