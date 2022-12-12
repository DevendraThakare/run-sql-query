import React, { useState, useEffect, useRef } from 'react'

const DBSelect = (props) => {
    const { toggleOn = 'click', onToggle, autoOpen, toggleOnSelfClick = true, position = 'down', className, initialHeading = "Choose Option" } = props
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
    return <div>
        <label className="block text-sm font-medium text-gray-700">Database</label>
        <div
            ref={elRef}
            onMouseEnter={onMouseOver}
            onMouseLeave={onMouseOut}
            className={`relative mt-2 mb-4 ${toggleOn === 'hover' ? 'open-on-hover' : ''}`}>
            <button
                onClick={onMouseClick}
                type="button" className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                <span className="flex items-center">
                    <span className="ml-3 block truncate">Postgres</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                    </svg>
                </span>
            </button>
            <ul className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${isOpen ? 'block' : 'hidden'}`} tabIndex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
                <li className="text-gray-900 relative cursor-pointer select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                    <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">Postgres</span>
                    </div>
                </li>
                <li className="text-gray-900 relative cursor-pointer select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                    <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">MySql</span>
                    </div>
                </li>
                <li className="text-gray-900 relative cursor-pointer select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                    <div className="flex items-center">
                        <span className="font-normal ml-3 block truncate">Firebird</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
}

export default DBSelect
