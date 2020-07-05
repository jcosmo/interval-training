import React from 'react';
import {StyleSheet, View} from 'react-native';
import Schedule from './components/Schedule';

const App = () => {
    return (
      <View style={styles.container}>
        <Schedule/>
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