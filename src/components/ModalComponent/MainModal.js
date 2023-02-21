import React from 'react'
import Card from 'components/ModalComponent/card'
import MainSwiperComponent from 'components/swiper'



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
            <button onClick={onOpen}> <Card src={props.src} text={props.text} /></button>

            <Modal
                size={props.full ? 'full' : '2xl'}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{props.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MainSwiperComponent data={props.data} />
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