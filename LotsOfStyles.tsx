import React = require('react');
import {StyleSheet, View, Text} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just Red</Text>
      <Text style={styles.bigBule}>just big Blue</Text>
      <Text style={(styles.bigBule, styles.red)}>BigBlue, then red</Text>
      <Text style={(styles.red, styles.bigBule)}>red, then bigBlue</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBule: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


export default LotsOfStyles;
