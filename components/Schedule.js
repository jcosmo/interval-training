import React, {useState} from 'react';
import {View} from 'react-native';
import AddStage from './AddStage';
import PlayBar from './PlayBar';
import Stages from './Stages';

const Schedule = () => {
    const [tabs, setTabs] = useState([
      { id: 0, text: 'hop', duration: 3, autoResume: true, state: 'editing' },
      { id: 1, text: 'skip', duration: 4, autoResume: false, state: 'editing' },
      { id: 2, text: 'jump', duration: 5, autoResume: true, state: 'editing' }]);

    const [nextId, setNextId] = useState(3);
    const [isRunning, setRunning] = useState(false);

    const addStage = (data) => {
      setNextId(nextId + 1);
      setTabs(currentTabs =>
        [...currentTabs, { id: nextId, text: data, duration: 10, autoResume: true, state: 'editing' }]);
    };

    const start = () => {
      setRunning(true);
    };

    const stop = () => {
      setRunning(false);
    };

    const isPlaying = () => {
      return isRunning;
    };

    const isNotPlaying = () => {
      return !isRunning;
    };

    const noOp = () => {};

    const removeStage = (id) =>
      setTabs(currentTabs => {
        return currentTabs.filter(x => x.id !== id);
      });

    const addStageComponent = () =>
    {
      if ( isPlaying() )
      {
        return null;
      }
      return <AddStage onAdd={addStage}/>;
    };

    return (
      <View>
        {addStageComponent()}
        <Stages tabs={tabs} onRemove={removeStage} canEdit={isNotPlaying}/>
        <PlayBar isPlaying={isPlaying} onPrevious={noOp} onPlay={start} onNext={noOp} onStop={stop}/>
      </View>
    );
  }
;

export default Schedule;