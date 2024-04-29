import { Component } from 'react';

import { Overlay, ModalEl, Image } from "./Modal.styled";

export default class Modal extends Component {

    componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

    handleBackdropClick = e => {
    e.target === e.currentTarget && this.props.toggleModal();
  };

  handleKeyDown = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };

  render() {
    return (
      <Overlay  onClick={this.handleBackdropClick}>
        <ModalEl >
          <Image src={this.props.largeImage()} alt=""></Image>
        </ModalEl>
      </Overlay>
    );
  }
}