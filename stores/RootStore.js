import {action} from 'mobx';
import ScheduleStore from './ScheduleStore';

class RootStore {
  scheduleStore;

  constructor() {
    this.scheduleStore = new ScheduleStore(this);
    this.processJson(this.fetchData());
  }

  @action
  processJson(json) {
    this.scheduleStore.load(json['schedules'] || []);
  }

  fetchData() {
    return {
      'schedules': [
        { 'id': 1, 'name': 'Morning Run' },
        { 'id': 2, 'name': 'Weekly sleep' }
      ]
    };
  }
}

export default RootStore;