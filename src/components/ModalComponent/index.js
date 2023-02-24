import React from 'react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from "@chakra-ui/react";



function ModalComponent(props) {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclosure();

    return (
        <>
    {props.text ?  (<Button  style={{position:'absolute', bottom:'0', right:'0'}} color='#782304' onClick={onOpen}>{props.name}</Button> ):(  <Button  color='#782304' onClick={onOpen}>{props.name}</Button> )}
           
            <Modal
                size={props.full ? 'full' : '4xl'}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        {props.text ? props.text :
                                                <iframe
                                                style={{ width: "100%", height: "70vh" }}
                                                src={props.href}
                                            /> }
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Закрыть</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ModalComponent