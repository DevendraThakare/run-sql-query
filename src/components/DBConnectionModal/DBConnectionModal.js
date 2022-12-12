import React, { useState } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/solid'
import DBSelect from '../DBSelect';
// import DBSelect from 'react-select'

const options = [
    { value: 'postgress', label: 'Postgress' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'firebird', label: 'Firebird' }
]

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,.7)'
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const DBConnectionModal = (props) => {
    let subtitle;
    const { isClosable = true, onModalClose } = props
    const [modalIsOpen, setIsOpen] = React.useState(props.isOpen);

    const [database, setDatabase] = useState(options[0])

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        if (typeof onModalClose === 'function') {
            onModalClose()
        }
    }

    const onSelect = (item) => {
        setDatabase(item.value)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="DB Connection"
            shouldCloseOnOverlayClick={false}
            preventScroll={true}
        >
            <h2 className="font-bold mb-8 text-center text-blue-700" ref={(_subtitle) => (subtitle = _subtitle)}>Setup DB Connection</h2>
            {isClosable ? <XMarkIcon onClick={closeModal} className="w-6 absolute right-2.5 top-2.5 text-black hover:text-blue-500" /> : null}
            <form className="w-96">
                <DBSelect value={database} options={options} onChange={value => onSelect(value)} />
                {/* <Dropdown initialHeading="Choose Database"/> */}
                {/* <div className="relative mb-5 z-0">
                    <input type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div> */}
                <div className="relative mb-5 z-0">
                    <input type="text" id="host" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="host" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Host</label>
                </div>
                <div className="relative mb-5 z-0">
                    <input type="text" id="port" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="port" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Port</label>
                </div>
                <div className="relative mb-5 z-0">
                    <input type="text" id="db-name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="db-name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Database Name</label>
                </div>
                <div className="relative mb-5 z-0">
                    <input type="text" id="user" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="user" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
                </div>
                <div className="relative mb-5 z-0">
                    <input type="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="text-center mt-10">
                    <button className="bg-blue-700 text-white font-semibold text-sm cursor-pointer text-center px-5 rounded py-2 font-bolder inline-block">Connect</button>
                </div>
            </form>
        </Modal>
    );
}


export default DBConnectionModal
