import React from 'react';
import {
  View, 
  Text,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import ButtonComponent from '../ButtonComponent';

const LoginComponent = () => {
  return (
    <View style={localStyles.main}>
      <Image
        source={require('../../assets/welcome.png')}
        style={{ 
          ...localStyles.image,
          width: 231, 
          height: 194, 
        }}
      />
      <Text style={localStyles.signUpText}>Sign Up with</Text>
      <ButtonComponent
        title="Facebook"
        style={{ ...localStyles.button, backgroundColor: '#047CBC' }}
      />
      <ButtonComponent
        title="Gmail"
        style={{ ...localStyles.button, backgroundColor: '#ff9722' }}
      />
    </View>  
  );
};

const localStyles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    backgroundColor: '#fff', 
    borderRadius: 10,
    padding: 15,
  },
  signUpText: {
    fontSize: 15,
    color: '#000',
    opacity: 0.4,
    margin: 28,
  },
  button: {
    width: 230,
    marginBottom: 10,
  },
});

export default LoginComponent;