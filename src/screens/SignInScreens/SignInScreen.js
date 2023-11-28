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
import anotherImage from '../../../assets/images/anotherImage.png';
import CustomButton from '../../components/Button/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = ({navigation}) => {
  const handleSignIn = () => {
    navigation.navigate('Home');
  };

  const {height} = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}>
      <View style={styles.root}>
        <CustomButton onPress={handleSignIn} />
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Image
          source={anotherImage}
          style={[styles.anotherImage, {height: height * 0.3}]}
          resizeMode="cover"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '800%',
    maxWidth: 400,
    maxHeight: 700,
    position: 'absolute',
    top: 140,
  },

  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#171796',
  },

  anotherImage: {
    marginVertical: -40,
    width: '100%',
    borderRadius: 10,
    position: 'absolute',
    bottom: -40,
  },
  miTec: {
    marginVertical: 30,
    width: '100%',
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: 30,
  },
});

export default SignInScreen;
