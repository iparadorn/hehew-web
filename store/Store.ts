import * as redux from "redux";
import State from "./State";

export default abstract class Store {
  public store: redux.Store;

  protected init() {
    let data: any = this;
    let reducers: any = {};
    for (let field in data) {
      if (data[field] instanceof State) {
        let state: any = data[field];
        state.storeName = field;
        reducers[field] = state.reducer.bind(state);
      }
    }
    data.store = redux.createStore(redux.combineReducers(reducers));
  }
}
