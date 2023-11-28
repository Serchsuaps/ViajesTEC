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
import Seguro from '../../../assets/images/seguro.png';
import Icon from 'react-native-ionicons';
import miTec from '../../../assets/images/miTec.png';
import CustomButton from '../../components/Button/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171796',
  },
  SeguroImage: {
    width: 47,
    height: 47,
    borderRadius: 10,
    position: 'absolute',
    bottom: 255,
    left: 230,
  },
  logoImage: {
    width: '100%',
    height: '30%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 390,
  },
});

const Screen7 = () => {
  return (
    <View style={styles.container}>
      <CustomButton />
      <Image source={Seguro} style={styles.SeguroImage} resizeMode="cover" />
      <Image source={Logo} style={styles.logoImage} resizeMode="cover" />
    </View>
  );
};

export default Screen7;
