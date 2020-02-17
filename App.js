import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AddStage from './components/AddStage';
import StagesAsFlatList from './components/Stages';

export default function App() {
  const [tabs, setTabs] = useState([
    { key: 1, text: 'bob' },
    { key: 2, text: 'tom' }]);

  const addStage = (data) => setTabs(currentTabs =>
    [...currentTabs, { key: currentTabs.length, text: data }]
  );

  return (
    <View style={styles.container}>
      <AddStage action={addStage}/>
      <StagesAsFlatList tabs={tabs}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center'
  }
});
