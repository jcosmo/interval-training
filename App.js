import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AddStage from './components/AddStage';
import Stages from './components/Stages';
import Go from './components/Go';

const App = () => {
    const [tabs, setTabs] = useState([
      { id: 0, text: 'hop', duration: 3, autoResume: true, state: 'complete' },
      { id: 1, text: 'skip', duration: 4, autoResume: false, state: 'active' },
      { id: 2, text: 'jump', duration: 5, autoResume: true, state: 'pending' }]);

    const [nextId, setNextId] = useState(3);

    const addStage = (data) => {
      setNextId(nextId + 1);
      setTabs(currentTabs =>
        [...currentTabs, { id: nextId, text: data, duration: 10, autoResume: true, state: 'pending' }]);
    };

    const removeStage = (id) =>
      setTabs(currentTabs => {
        return currentTabs.filter(x => x.id !== id);
      });

    return (
      <View style={styles.container}>
        <AddStage onAdd={addStage}/>
        <Stages tabs={tabs} onRemove={removeStage}/>
        <Go />
      </View>
    );
  }
;

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: 'center'
  }
});

export default App;