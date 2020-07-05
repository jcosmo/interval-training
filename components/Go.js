import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-web';

const Go = props => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Image style={styles.icon} source={require('../assets/run.png')}/>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  icon: {
    height: 20,
    width: 20,
    flexGrow: 0,
    flexShrink: 0
  }
});

export default Go;

