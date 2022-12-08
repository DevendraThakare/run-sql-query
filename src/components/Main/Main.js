import { useState } from 'react'
import SplitPane from 'react-split-pane'
import QuerySection from '../QuerySection'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import "./Main.css"
import DBConnectionList from '../DBConnectionList'
import DBTableList from '../DBTableList'

const leftSideContainerMaxWidth = 320
const rightSideContainerMaxWidth = 380
const sideContainerMinWidth = 40
const Main = (props) => {
    const [collapseLeft, setCollapseLeft] = useState(false)
    const [collapseRight, setCollapseRight] = useState(false)
    const { isDisabled } = props
    return <div className={`top-14 fixed left-0 right-0 bottom-5`}>
        {/* {!isDisabled ? <> */}
        {collapseLeft ?
            <ChevronRightIcon
                onClick={() => setCollapseLeft(false)}
                style={{ left: `${sideContainerMinWidth - 12}px`, top: "8px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            /> :
            <ChevronLeftIcon
                onClick={() => setCollapseLeft(true)}
                style={{ left: `${leftSideContainerMaxWidth - 12}px`, top: "8px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            />}

        {collapseRight ? <ChevronLeftIcon
            onClick={() => setCollapseRight(false)}
            style={{ right: `${sideContainerMinWidth - 12}px`, top: "8px" }}
            className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
        /> :
            <ChevronRightIcon
                onClick={() => setCollapseRight(true)}
                style={{ right: `${rightSideContainerMaxWidth - 12}px`, top: "8px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            />}
        {/* </>: null} */}

        <SplitPane
            split="vertical"
            minSize={sideContainerMinWidth}
            size={collapseLeft ? sideContainerMinWidth : leftSideContainerMaxWidth}
        >
            <div className="h-full">
                {!collapseLeft ? <>
                    <div className="px-5 py-2 text-sm border-y text-gray-700 font-semibold border-slate-200">Database Connections</div>
                    <DBConnectionList />
                </> : null}
            </div>
            <SplitPane
                // className={`${isDisabled ? 'pointer-events-none opacity-5' : ''}`}
                split="vertical"
                minSize={sideContainerMinWidth}
                primary="second"
                size={collapseRight ? sideContainerMinWidth : rightSideContainerMaxWidth}
            >
                <QuerySection />
                <div className="h-full">
                    {!collapseRight ? <>
                        <div className="px-5 py-2 text-sm border-y text-gray-700 font-semibold border-slate-200">Available Tables</div>
                        <DBTableList />
                    </> : null}
                </div>
            </SplitPane>
        </SplitPane>
    </div>
}

export default Main
