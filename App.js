import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import MainNavigator from './navigation';
import firebase from "firebase";
import {AppLoading} from 'expo'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    rubikMedium: require('./assets/fonts/Rubik-Medium.ttf'),
    rubikRegular: require('./assets/fonts/Rubik-Regular.ttf'),
    rubikLight: require('./assets/fonts/Rubik-Light.ttf')

  })
}

var config = {
  apiKey: "AIzaSyBrSjfZ8rR-_q-oyPcdQgvbi4yV8Lbg4E0",
  authDomain: "czystych.firebaseapp.com",
  databaseURL: "https://czystych.firebaseio.com",
  projectId: "czystych",
  storageBucket: "czystych.appspot.com",
  messagingSenderId: "213689257019",
  appId: "1:213689257019:web:f1d201bc125e18cd9ee01e"
};
firebase.initializeApp(config);

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return <AppLoading
    startAsync={fetchFonts}
    onFinish={() => setDataLoaded(true)}
    onError={(err) => console.log(err) }
    />
  }

  return (
    <MainNavigator />
    // <View style={styles.container}>
    //   <MapView 
    //   style={styles.mapStyle} 
    //   initialRegion={{
    //     latitude: 51.138163,
    //     longitude: 23.478027,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   }}
    //   />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
