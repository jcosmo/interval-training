import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-web';

const ScheduleSummary =
  observer(({schedule}) => {
    return (
      <View style={styles.scheduleSummary}>
        <Text>{schedule.name}</Text>
        <Text>open</Text>
      </View>
    );
  })
;

const styles = StyleSheet.create({
  scheduleSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 3,
    backgroundColor: '#EEE'
  }
});


export default ScheduleSummary;