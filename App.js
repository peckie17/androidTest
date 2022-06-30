/*import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Navigation from './src/Navigation/Navigation.jsx';
import { AuthProvider } from './src/context/AuthContext';
import 'react-native-gesture-handler';
//import { registerRootComponent } from 'expo';


//import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#06bcee" />
      <Navigation />
    </View>
  );
};

//registerRootComponent(App);
export default App;*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation/Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

