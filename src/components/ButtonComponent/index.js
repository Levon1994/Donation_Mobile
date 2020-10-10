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

const ButtonComponent = ({
  title,
  style,
  onPress,
  children,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={{...localStyles.main, ...style}}
    >
      <Text style={localStyles.text}>{children || title}</Text>
    </TouchableOpacity>  
  );
};

const localStyles = StyleSheet.create({
  main: {
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D8D8D8',
    borderRadius: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#fff',
  },
});

export default ButtonComponent;