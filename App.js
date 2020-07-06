import {Provider} from 'mobx-react';
import React from 'react';
import ScheduleList from './components/ScheduleList';
import Schedule from './components/Schedule';
import RootStore from './stores/RootStore';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider rootStore={new RootStore()}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ScheduleList">
          <Stack.Screen name="ScheduleList" component={ScheduleList} options={{ title: "Schedules"}}/>
          <Stack.Screen name="Schedule" component={Schedule} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;