import { createContext, useState } from 'react'

const ModalContext=createContext()

function Provider({children}){
    const [show,setShow]=useState(false)
    const [mode,setMode]=useState('winner')// winner || start

    const showModal=()=>{
        setShow(true)
    }
    const hideModal=()=>{
        setShow(false)
    }
    const valueToShare={
        show,
        modalMode:mode,
        setModalMode:setMode,
        showModal,
        hideModal
    }
    return (
        <ModalContext.Provider value={valueToShare}>
            {children}
        </ModalContext.Provider>
    )
}
export default ModalContext
export {Provider}