import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { StoreType } from "../../store/index";

import IModal from "../../model/IModal";
import AlertModal from "../../components/AlertModal";
import controller from "../../controllers";

//////////// Properties ///////////////

interface DispatchToProps {
  openModal(): any;
  closeModal(): any;
}

interface StateToProps {
  appModal: IModal;
}

interface PropsType extends DispatchToProps, StateToProps {}

//////////// Component ///////////////

class AppError extends PureComponent {
  props: PropsType;

  render() {
    const { appModal, closeModal } = this.props;
    return <AlertModal open={appModal.isOpen} onClose={closeModal} message={appModal.message} mode={appModal.mode} />;
  }
}

const dispatchToProps: DispatchToProps = {
  closeModal: controller.appModal.closeModal,
  openModal: controller.appModal.openModal,
};

//////////// Bind Props ///////////////

const mapDispatchToProps = () => dispatchToProps;

const mapStateToProps = (state: StoreType) => {
  let stateToProps: StateToProps = {
    appModal: state.appModal,
  };
  return stateToProps;
};

export default connect(mapStateToProps, mapDispatchToProps)(AppError);
