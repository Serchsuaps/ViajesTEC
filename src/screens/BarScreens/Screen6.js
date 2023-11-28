import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button,
} from 'react-native';
import Logo from '../../../assets/images/LogoITESM.png';
import 'react-native-gesture-handler';
import Icons from '../../../assets/images/iconslogo.png';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171796',
  },
  iconImage: {
    width: 400,
    height: 150,
    borderRadius: 10,
    position: 'absolute',
    bottom: 200,
  },
  logoImage: {
    width: '100%',
    height: '30%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 390,
  },
});

const Screen6 = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons} style={styles.iconImage} resizeMode="cover" />
      <Image source={Logo} style={styles.logoImage} resizeMode="cover" />
    </View>
  );
};

export default Screen6;
