import {action, observable} from 'mobx';
import Schedule from '../model/Schedule';
import BaseStore from './BaseStore';

class ScheduleStore extends BaseStore {
  @observable schedules = [];

  load(schedules) {
    schedules.forEach(json => this.updateScheduleFromJson(json));
    this.loaded();
  }

  @action
  updateScheduleFromJson(json) {
    let club = this.schedules.find(x => x.id === json.id);
    if (!club) {
      this.schedules.push(club = new Schedule(this, json.id));
    }
    club.updateFromJson(json);
  }

  resolve(id) {
    id = parseInt(id, 10);
    return this.schedules.find(x => x.id === id);
  }
}

export default ScheduleStore;