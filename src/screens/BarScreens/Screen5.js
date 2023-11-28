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
import Map from '../../../assets/images/map.jpg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171796',
  },
  mapImage: {
    widthMax: '100%',
    width: 390,
    height: 300,
    borderRadius: 10,
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

const Screen5 = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} resizeMode="cover" />
      <Image source={Map} style={styles.mapImage} resizeMode="cover" />
    </View>
  );
};

export default Screen5;
