import Action from "./Action";
import Store from "./Store";

export class State<DATA_TYPE> {
  protected appStore: Store;
  public storeName: string;
  public initialState: DATA_TYPE;

  constructor(appStore: Store, initialState: DATA_TYPE) {
    this.appStore = appStore;
    this.initialState = initialState;
  }

  public reducer(state: DATA_TYPE, action: Action<DATA_TYPE>) {
    let prefix = this.storeName + "/";
    if (state === undefined) state = this.initialState;
    if (action.type.indexOf(prefix) === 0) {
      let self: any = this;
      let method = action.type.substring(prefix.length);
      let newState = self[method](state, action.data);
      return newState;
    }
    return state;
  }

  public getState(): DATA_TYPE {
    let state = this.appStore.store.getState();
    return state[this.storeName];
  }

  public resetState() {
    this.appStore.store.dispatch({ type: this.storeName + "/onResetData" });
  }

  public setState(data: DATA_TYPE) {
    this.appStore.store.dispatch({ type: this.storeName + "/onUpdateData", data });
  }

  public replaceState(data: DATA_TYPE) {
    this.appStore.store.dispatch({ type: this.storeName + "/onReplaceData", data });
  }

  protected onUpdateData(o: any, n: any) {
    if (o === undefined || o === null) {
      return n;
    } else if (o instanceof Array) {
      let ret: Array<any> = [];
      let oArray: Array<any> = o;
      let nArray: Array<any> = n;
      return ret.concat(oArray).concat(nArray);
    } else {
      return { ...o, ...n };
    }
  }

  protected onReplaceData(o: any, n: any) {
    return { ...n };
  }

  protected onResetData(o: any, n: any) {
    return { ...this.initialState };
  }
}

export default State;
