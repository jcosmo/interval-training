import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import ScheduleSummary from './ScheduleSummary';

const ScheduleList = inject(stores => ({ scheduleStore: stores.rootStore.scheduleStore }))(
  observer(({navigation, scheduleStore}) => {
    if (scheduleStore.loading) {
      return <View><Text>Loading...</Text></View>;
    }
    return (
      <ScrollView style={styles.scheduleList}>
        {scheduleStore.schedules.map((s) => <ScheduleSummary navigation={navigation} schedule={s}/>)}
      </ScrollView>
    );
  }))
;

const styles = StyleSheet.create({
  scheduleList: {}
});


export default ScheduleList;