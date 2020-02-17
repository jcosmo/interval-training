import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Stage = props => {
  return (
    <View key={props.data.id} style={styles.stage}><Text>{props.data.text}</Text></View>
  );
};

const styles = StyleSheet.create({
  stage: {
    marginVertical: 10,
    padding: 10,
  }
});

export default Stage;

