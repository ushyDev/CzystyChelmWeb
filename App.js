import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';


export default function App() {
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.mapStyle} 
      ref={(ref) => this.map = ref}
      initialRegion={{
        latitude: 51.138163,
        longitude: 23.478027,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
      <StatusBar style="auto" />
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
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
