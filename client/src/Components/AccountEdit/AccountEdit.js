import React, { useState } from 'react';
import ModalWindow from '../AccountModal/AccountModal.js';
import Modal from 'react-modal';
import styles from './AccountEdit.module.css'

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
       <div className={styles.editBtn}><div onClick={openModal}>edit</div></div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} >
          <ModalWindow closeModal={closeModal} />
        </Modal>
</>
    );
}

export default AccountEdit;