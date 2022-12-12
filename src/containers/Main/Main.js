import { useEffect, useState } from 'react'
import SplitPane from 'react-split-pane'
import QuerySection from '../../components/QuerySection'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import DBConnectionList from '../../components/DBConnectionList'
import DBTableList from '../../components/DBTableList'
import apiClient from '../../utils/axios'
// import Spinner from '../../components/Spinner/Spinner'
import "./Main.css"
import QueryTabs from '../../components/QueryTabs'

// const leftSideContainerMaxWidth = 320
// const rightSideContainerMaxWidth = 380
// const sideContainerMinWidth = 40
const leftSideContainerMaxWidth = 20
const rightSideContainerMaxWidth = 25
const sideContainerMinWidth = 2

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}

const Main = (props) => {
    const [collapseLeft, setCollapseLeft] = useState(false)
    const [collapseRight, setCollapseRight] = useState(false)
    const { setShowConnectionModal, dbConnectionList } = props
    const [queryResult, setQueryResult] = useState(null)
    const [fetchingQueryResult, setFetchingQueryResult] = useState(false)
    const [fetchingTableData, setFetchingTableData] = useState(false)
    const [tableData, setTableData] = useState(null)
    useEffect(() => {
        fetchTableData()
    }, [])
    const fetchQueryResults = async (table) => {
        setFetchingQueryResult(true)
        const result = await apiClient.get(`/${table}.json`)
        setFetchingQueryResult(false)
        setQueryResult(result.data.items)
    }
    const fetchTableData = async () => {
        setFetchingTableData(true)
        const result = await apiClient.get('/tables.json')
        setFetchingTableData(false)
        setTableData(result.data)
    }


    useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            // change width from the state object
            if (window.innerWidth <= 1024) {
                setCollapseRight(true)
            } else {
                setCollapseRight(false)
            }

            if (window.innerWidth <= 768) {
                setCollapseLeft(true)
            } else {
                setCollapseLeft(false)
            }
        }, 100)
        // set resize listener
        window.addEventListener('resize', debouncedHandleResize);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', debouncedHandleResize);
        }
    }, [])

    return <div className={`top-14 fixed left-0 right-0 bottom-5`}>
        {collapseLeft ?
            <ChevronRightIcon
                onClick={() => setCollapseLeft(false)}
                style={{ left: `${sideContainerMinWidth - 0.5}%`, top: "8px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            /> :
            <ChevronLeftIcon
                onClick={() => setCollapseLeft(true)}
                style={{ left: `${leftSideContainerMaxWidth - 0.7}%`, top: "8px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            />}

        {collapseRight ? <ChevronLeftIcon
            onClick={() => setCollapseRight(false)}
            style={{ right: `${sideContainerMinWidth - 1}%`, top: "8px" }}
            className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
        /> :
            <ChevronRightIcon
                onClick={() => setCollapseRight(true)}
                style={{ right: `${rightSideContainerMaxWidth - 5.7 + (collapseLeft ? 4.5 : 0)}%`, top: "8px" }}
                className="z-10 absolute w-6 p-1 border rounded border-slate-200 bg-slate-50"
            />}

        <SplitPane
            split="vertical"
            // primary="second"
            minSize={sideContainerMinWidth}
            // maxSize={leftSideContainerMaxWidth}
            size={collapseLeft ? `${sideContainerMinWidth}%` : `${leftSideContainerMaxWidth}%`}
        >
            <div className="h-full">
                {!collapseLeft ? <>
                    <div className="px-5 py-2 text-sm border-y text-gray-700 font-semibold border-slate-200">Database Connections</div>
                    <DBConnectionList dbConnectionList={dbConnectionList} setShowConnectionModal={setShowConnectionModal} />
                </> : null}
            </div>
            <SplitPane
                // className={`${isDisabled ? 'pointer-events-none opacity-5' : ''}`}
                split="vertical"
                minSize={sideContainerMinWidth}
                primary="second"
                size={collapseRight ? `${sideContainerMinWidth}%` : `${rightSideContainerMaxWidth}%`}
            >
                {/* <QuerySection queryResult={queryResult} fetchQueryResults={fetchQueryResults} fetchingQueryResult={fetchingQueryResult} /> */}
                <QueryTabs queryResult={queryResult} fetchingQueryResult={fetchingQueryResult}  fetchQueryResults={fetchQueryResults}/>
                <div className="h-full">
                    {!collapseRight ? <>
                        <div className="px-5 py-2 text-sm border-y text-gray-700 font-semibold border-slate-200">Available Tables</div>

                        <DBTableList tableData={tableData} fetchingTableData={fetchingTableData} />
                    </> : null}
                </div>
            </SplitPane>
        </SplitPane>
    </div>
}

export default Main
