import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa almacenamiento asincrono de la aplicacion
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import HomeScreen from '../screens/GuScreen';
//import LoginScreen from '../screens/LoginScreen';
//import RegisterScreen from '../screens/RegisterScreen';
import {AuthContext} from '../context/AuthContext';
// import SplashScreen from '../screens/SplashScreen';
import HomeNavigation from './HomeNavigation.jsx';
import AuthNavigation from './AuthNavigation';

const Navigation = () => {
  //const {userInfo, splashLoading} = useContext(AuthContext);
    const userInfo = true;
    
 const[userLogged, setUserLogged] =useState(false);

 //{userInfo ? <HomeNavigation/> : <AuthNavigation/>}

  return (
    <NavigationContainer>
        {userInfo ? <HomeNavigation/> : <AuthNavigation/>}
    </NavigationContainer>
  );
};

export default Navigation;


