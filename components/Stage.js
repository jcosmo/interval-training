import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Stage = props => {
  return (
    <View key={props.data.id} style={styles.stage}>
      <Text style={styles.text}>{props.data.text}</Text>
      <Image style={styles.icon} source={require("../assets/delete.png")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  stage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderColor: '#777',
    borderWidth: 1,
    backgroundColor: '#EEE',
  },

  text: {
    flexGrow: 0,
  },

  icon: {
    height: 15,
    width: 15,
    flexGrow: 0,
    flexShrink: 0
  }
});

export default Stage;

