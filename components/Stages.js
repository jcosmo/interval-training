import React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import Stage from './Stage';

const Stages = props => {
  return (
    <ScrollView style={styles.stages}>
      {props.tabs.map((t) => <Stage key={t.id} data={t} onRemove={props.onRemove.bind(this,t.id)}/>)}
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
