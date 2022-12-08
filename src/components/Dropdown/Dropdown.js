import React, { useState, useEffect, useRef } from 'react'

const Dropdown = (props) => {
    const { toggleOn = 'click', onToggle, autoOpen, toggleOnSelfClick = true, position = 'down', className, initialHeading="Choose Option" } = props
    const [isOpen, setIsOpen] = useState(false)
    const elRef = useRef(null);
    const [selectedItem, setSelectedItem] = useState(null)
    useEffect(() => {
        setIsOpen(autoOpen)
    }, [autoOpen])

    const addBodyListener = () => {
        document.body.addEventListener('click', bodyClickHandler)
    }
    const removeBodyListener = () => {
        document.body.removeEventListener('click', bodyClickHandler)
    }
    const bodyClickHandler = (event) => {
        if (toggleOnSelfClick) {
            toggleDropdown()
        } else if (!elRef.current.contains(event.target) && isOpen) {
            toggleDropdown()
        }
    }
    const toggleDropdown = (type) => {
        setIsOpen(typeof type === 'boolean' ? type : !isOpen)
        if (toggleOn === 'click') {
            if (isOpen) {
                addBodyListener()
            } else {
                removeBodyListener()
            }
        }
        if (typeof onToggle === 'function') {
            onToggle(isOpen)
        }
    }
    const onMouseOver = () => {
        if (toggleOn === 'hover') {
            toggleDropdown(true)
        }
    }
    const onMouseOut = () => {
        if (toggleOn === 'hover') {
            toggleDropdown(false)
        }
    }

    const onMouseClick = () => {
        if (toggleOn === 'click') {
            toggleDropdown()
        }
    }
    return <div
        className={`mb-6 relative ${className} ${position} ${isOpen ? 'open' : ''} ${toggleOn === 'hover' ? 'open-on-hover' : ''}`}
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOut}
    >
        <button
            onClick={onMouseClick}
            className="text-black outline-none text-blue-700 bg-slate-100 hover:bg-slate-200 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
            type="button"
        >
            {initialHeading || selectedItem?.value}
            <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div className={`${!isOpen ? 'hidden' : ''} absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li className="cursor-pointer">
                    <div className="block py-2 px-4 hover:bg-gray-100">Progress</div>
                </li>
                <li className="cursor-pointer">
                    <div className="block py-2 px-4 hover:bg-gray-100">MySql</div>
                </li>
                <li className="cursor-pointer">
                    <div className="block py-2 px-4 hover:bg-gray-100">Firebird</div>
                </li>
            </ul>
        </div>
    </div>
}

export default Dropdown
