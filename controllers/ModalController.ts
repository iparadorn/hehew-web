import IModal from "../model/IModal";
import State from "../store/State";

export default class ModalController {
  private modalState: State<IModal>;

  constructor(modalState: State<IModal>) {
    this.modalState = modalState;
  }

  public openModal = (): void => {
    this.modalState.setState({ isOpen: true });
  };

  public closeModal = (): void => {
    this.modalState.setState(this.modalState.initialState);
  };
}
