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
import Connect from '../../../assets/images/connect.png';
import Icon from 'react-native-ionicons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171796',
  },
  connectImage: {
    width: 290,
    height: 320,
    borderRadius: 10,
    position: 'absolute',
    bottom: 65,
  },
  logoImage: {
    width: '100%',
    height: '30%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 390,
  },
});

const Screen9 = () => {
  return (
    <View style={styles.container}>
      <Image source={Connect} style={styles.connectImage} resizeMode="cover" />
      <Image source={Logo} style={styles.logoImage} resizeMode="cover" />
    </View>
  );
};

export default Screen9;
