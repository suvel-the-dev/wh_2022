import React, { useContext } from 'react'
import MessageContext from '../../context/MessageContext'
import ModalContainer from '../ModalContainer'
import './style.css'

const modalDimension = {
    width: 400,
    height: 450
}

const MessageModal = () => {

    const { msg, setMsg } = useContext(MessageContext);
    const handelCloseModal = () => {
        setMsg({ show: false });
    }
    return (
        <>
            {msg.show &&
                <ModalContainer>
                    <div
                        className={'modal-inner-container'}
                        style={{
                            width: `${modalDimension.width}px`,
                            height: `${modalDimension.height}px`,
                        }}
                    >
                        {msg.content}
                        <button onClick={handelCloseModal}>close</button>
                    </div>
                </ModalContainer>
            }
        </>
    )
}

export default MessageModal
