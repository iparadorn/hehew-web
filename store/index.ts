import Store from "./Store";
import State from "./State";

import IModal from "../model/IModal";


//////////////////////////////////////////////
const EMPTY_FORM_FIELD = { value: "", valid: true, message: "" };

const APP_MODAL: IModal = { isOpen: false, message: "", mode: "info" };

///////// Store Type /////////
export interface StoreType {
  appModal: IModal;

}

////////// Store //////////

export class AppStore extends Store {
  public appModal: State<IModal> = new State<IModal>(this, APP_MODAL);

  constructor() {
    super();
    this.init();
  }
}

export const appStore = new AppStore();
