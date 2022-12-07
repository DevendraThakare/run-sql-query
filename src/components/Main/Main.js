import { useState } from 'react'
import SplitPane from 'react-split-pane'
import QuerySection from '../QuerySection'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import "./Main.css"

const leftSideContainerMaxWidth = 280
const rightSideContainerMaxWidth = 420
const sideContainerMinWidth = 40
const Main = () => {
    const [collapseLeft, setCollapseLeft] = useState(false)
    const [collapseRight, setCollapseRight] = useState(false)
    return <div className="top-14 fixed left-0 right-0 bottom-5">
        {collapseLeft ?
            <ChevronRightIcon
                onClick={() => setCollapseLeft(false)}
                style={{ left: `${sideContainerMinWidth-12}px`, top: "28px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            /> :
            <ChevronLeftIcon
                onClick={() => setCollapseLeft(true)}
                style={{ left: `${leftSideContainerMaxWidth-12}px`, top: "28px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            />}

        {collapseRight ? <ChevronLeftIcon
            onClick={() => setCollapseRight(false)}
            style={{ right: `${sideContainerMinWidth-12}px`, top: "28px" }}
            className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
        /> :
        <ChevronRightIcon
            onClick={() => setCollapseRight(true)}
            style={{ right: `${rightSideContainerMaxWidth-12}px`, top: "28px" }}
            className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
        />}

        <SplitPane
            split="vertical"
            minSize={50}
            size={collapseLeft ? 40 : 280}
        >
            <div>This is a Pane1</div>
            <SplitPane
                split="vertical"
                minSize={40}
                primary="second"
                size={collapseRight ? 40 : 420}
            >
                <QuerySection />
                <div>This is a Pane3</div>
            </SplitPane>
        </SplitPane>
    </div>
}

export default Main
