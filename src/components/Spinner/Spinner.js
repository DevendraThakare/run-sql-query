import React from "react"
import { ReactComponent as SpinnerSvg } from '../../assets/images/spinner.svg'

const Spinner = (props) => {
    const { size='medium' } = props
    const getWidth = (size) => {
        if (size === 'extra-small') {
            return '50px'
        } else if (size === 'small') {
            return '100px'
        } else if (size === 'medium') {
            return '150px'
        } else {
            return '150px'
        }
    }
    const width = getWidth(size)

    return <div className="spinner-wrap">
        <SpinnerSvg width={width} height={width} className="spinner-svg" />
    </div >
}

export default Spinner