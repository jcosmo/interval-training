import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const AddStage = props => {
  const [newStageText, setNewStageText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={newStageText} onChangeText={setNewStageText} placeholder='aaa'/>
      <Button title="Add Stage" onPress={props.action.bind(this, newStageText)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexGrow: 2
  }
});

export default AddStage;

