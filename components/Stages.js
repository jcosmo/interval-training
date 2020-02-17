import React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import Stage from './Stage';

const Stages = props => {
  return (
    <ScrollView>
      {props.tabs.map((t) => <Stage  data={t}/>)}
    </ScrollView>
  );
};

const StagesAsFlatList = props => {
  return (
    <FlatList
      data={props.tabs}
      renderItem={ item => <Stage data={item}/>}
    />
  );
};

const styles = StyleSheet.create({
  stages: {
  },
});

export default Stages;
