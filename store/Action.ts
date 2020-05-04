import * as redux from "redux";

export class Action<DATA_TYPE> implements redux.Action {
  public type!: string;
  public data!: DATA_TYPE;
}

export default Action;
