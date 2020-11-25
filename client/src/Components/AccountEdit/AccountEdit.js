import React, { useState } from 'react';
import ModalWindow from "../AccountModal/AccountModal.js";
import Modal from "react-modal";;

function AccountEdit(props) {
const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    console.log(modalIsOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }

    return (

<>
        <button onClick={openModal}>+</button>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
          <ModalWindow closeModal={closeModal} />
        </Modal>
</>
    );
}

export default AccountEdit;