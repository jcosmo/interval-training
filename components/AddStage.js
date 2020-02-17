import React, {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-web';

const AddStage = props => {
  const [newStageText, setNewStageText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={newStageText} onChangeText={setNewStageText} placeholder='aaa'/>
      <TouchableWithoutFeedback onPress={props.action.bind(this, newStageText)}>
        <Image style={styles.icon} source={require('../assets/add.png')}/>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 0,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    flexGrow: 2
  },
  icon: {
    height: 20,
    width: 20,
    flexGrow: 0,
    flexShrink: 0
  }
});

export default AddStage;
