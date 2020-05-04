import React, { PureComponent } from "react";

//@ts-ignore
import { Modal, Button, Icon } from "glud-component";
import styled from "styled-components";

interface AlertIconProps {
  mode: string;
}

const AlertIconLayout = styled.div`
  float: left;
  padding-right: 30px;
  font-size: 30px;
  color: ${(props: AlertIconProps) => (props.mode === "error" ? "#c02b2f" : "#0277bd")};
`;

const AlertMessage = styled.div`
  padding: 20px;
  font-size: 1rem;
`;

interface Props {
  mode: string;
  open: boolean;
  message: string;
  onClose(): any;
}

export default class AlertModal extends PureComponent {
  props: Props;

  render = () => {
    const { open, onClose, message, mode } = this.props;
    return (
      <Modal open={open} onClose={onClose}>
        <Modal.Content>
          <React.Fragment>
            <AlertIconLayout mode={mode}>{mode === "error" ? <Icon icon="fas fa-exclamation-circle" /> : <Icon icon="fas fa-info-circle" />}</AlertIconLayout>
            <AlertMessage>{message}</AlertMessage>
            <Button fullwidth onClick={onClose}>
              ปิด
            </Button>
          </React.Fragment>
        </Modal.Content>
      </Modal>
    );
  };
}
