/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';
import SignInScreen from './src/screens/SignInScreens/SignInScreen';
import {createAppContainer} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';
import Navigation from './src/Navigation';
import CustomButton from './src/components/Button/CustomButton';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './src/screens/BarScreens/Screen1';
import Screen2 from './src/screens/BarScreens/Screen2';
import CustomDrawer from './src/components/CustomDrawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouseChimney} from '@fortawesome/free-solid-svg-icons/faHouseChimney';
import {faTimeline} from '@fortawesome/free-solid-svg-icons';
import {faLanguage} from '@fortawesome/free-solid-svg-icons';
import {faFirefoxBrowser} from '@fortawesome/free-brands-svg-icons';
import {faMap} from '@fortawesome/free-regular-svg-icons';
import {faBicycle} from '@fortawesome/free-solid-svg-icons';
import {faCarBurst} from '@fortawesome/free-solid-svg-icons';
import {faSchool} from '@fortawesome/free-solid-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Screen3 from './src/screens/BarScreens/Screen3';
import Screen4 from './src/screens/BarScreens/Screen4';
import Screen5 from './src/screens/BarScreens/Screen5';
import Screen6 from './src/screens/BarScreens/Screen6';
import Screen7 from './src/screens/BarScreens/Screen7';
import Screen8 from './src/screens/BarScreens/Screen8';
import Screen9 from './src/screens/BarScreens/Screen9';
import Screen10 from './src/screens/BarScreens/Screen10';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Home"
        component={Screen1}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faHouseChimney} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Línea del tiempo"
        component={Screen3}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faTimeline} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Traductor"
        component={Screen4}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faLanguage} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={Screen5}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faMap} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Aplicaciones"
        component={Screen6}
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon icon={faFirefoxBrowser} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name="Seguro"
        component={Screen7}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faCarBurst} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Transporte"
        component={Screen8}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faBicycle} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Escuela"
        component={Screen9}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faSchool} size={22} />,
        }}
      />
      <Drawer.Screen
        name="VinculaTEC"
        component={Screen10}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon={faLink} size={22} />,
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={SignInScreen}
        options={{
          drawerIcon: () => (
            <FontAwesomeIcon icon={faRightFromBracket} size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
