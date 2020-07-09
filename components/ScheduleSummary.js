import {observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-web';
import { useNavigation } from '@react-navigation/native';

const ScheduleSummary =
  observer(({schedule}) => {
    const navigation = useNavigation();
    return (
      <View style={styles.scheduleSummary}>
        <Text>{schedule.name}</Text>
        <Button title="open"
          onPress={() => navigation.navigate('Schedule', {scheduleId: schedule.id})}
        />
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