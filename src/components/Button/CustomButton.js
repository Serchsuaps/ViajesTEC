import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import miTec from '../../../assets/images/miTec.png';

const CustomButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={miTec}
        style={[styles.logo, { height: 70 }]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    bottom: -40,
  },
  text: {
    textAlign: 'center',
    fontFamily: "Cherry",
    color: 'black',
    fontSize: 16,
  },
  logo: {
    height: 30,
  },
});

export default CustomButton;
