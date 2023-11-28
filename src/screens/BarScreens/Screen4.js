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
import Trans from '../../../assets/images/translate.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171796',
  },
  transImage: {
    widthMax: '100%',
    width: 390,
    height: 280,
    position: 'absolute',
    bottom: 120,
  },
  logoImage: {
    width: '100%',
    height: '30%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 420,
  },
});

const Screen4 = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} resizeMode="cover" />
      <Image source={Trans} style={styles.transImage} resizeMode="cover" />
    </View>
  );
};

export default Screen4;
