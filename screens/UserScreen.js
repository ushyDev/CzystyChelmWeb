import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class UserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.contener}>
        <Text> UserScreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contener:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});