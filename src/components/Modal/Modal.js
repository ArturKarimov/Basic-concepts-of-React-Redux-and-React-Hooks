import React, {useContext} from 'react'
import s from './Modal.module.css'
import Context from "../../Context";

const Modal = () => {

    const {closeModal} = useContext(Context)

    const closeModalWindow = () => {
        return event => event.target.dataset.id && closeModal()
    }


    return (
        <div data-id="modalId" onClick={ closeModalWindow() } className={s.modal}>
            <div className={s.modalBody}>
                <h3>Написать сообщение</h3>
                <div className={s.modalMessage}>
                    <textarea placeholder={"Write your message"}/>
                </div>
                <div onClick={closeModal} className={s.closeModal}>
                    <a href="#">
                        <i className="fas fa-times"></i>
                    </a>
                </div>
                <div className={s.sendMessage}>
                    <button>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Modal