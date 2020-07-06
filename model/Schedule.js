import {observable, action} from "mobx";

class Schedule {
  scheduleStore;
  id;
  @observable name = "";

  constructor(store, id) {
    this.scheduleStore = store;
    this.id = id;
  }

  updateFromJson(json) {
    this.name = json.name;
  }
}

export default Schedule;