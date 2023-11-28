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
import Roadmap from '../../../assets/images/Roadmap.png';
import Logo from '../../../assets/images/LogoITESM.png';
import 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171796',
  },
  roadmapImage: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
  },
});

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.roadmapImage} resizeMode="cover" />
    </View>
  );
};

export default Screen1;
