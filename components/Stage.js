import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-web';

const Stage = props => {
  return (
    <View key={props.data.id} style={[styles.stage,
                                      styles[props.data.state]]}>
      <View style={styles.leftPanel}>
        <Text style={styles.text}>{props.data.text}</Text>
        <Text>Duration : {props.data.duration}</Text>
        <Text>Auto proceed : {props.data.autoResume ? 'Yes' : 'No'}</Text>
      </View>

      <TouchableWithoutFeedback onPress={props.onRemove}>
        <Image style={styles.icon} source={require('../assets/delete.png')}/>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  stage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    backgroundColor: '#EEE',
  },

  leftPanel: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 10
  },

  text: {
    flexGrow: 1
  },

  icon: {
    alignSelf: 'flex-end',
    height: 15,
    width: 15,
    flexGrow: 0,
    flexShrink: 0
  },

  active: {
    backgroundColor: '#7F7'
  },

  complete: {
    backgroundColor: '#DDD'
  },

  pending: {
    backgroundColor: '#CFC'
  }
});

export default Stage;

