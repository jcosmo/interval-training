import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'mobx-react';
import ScheduleList from './components/ScheduleList';
import RootStore from './stores/RootStore';

const App = () => {
    return (
      <Provider rootStore={new RootStore()}>
        <View style={styles.container}>
          <ScheduleList/>
        </View>
      </Provider>
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