import { appStore } from "../store/index";
import ModalController from "./ModalController";

const appModalController: ModalController = new ModalController(appStore.appModal);

export default {
  appModal: appModalController
};
