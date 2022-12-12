import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/solid'
import QuerySection from '../QuerySection';
import './QueryTabs.css'

const QueryTabs = (props) => {
    const [refresh, doRefresh] = useState(0);
    const { fetchQueryResults, queryResult, fetchingQueryResult } = props
    const [tabs, setTabs] = useState([0])
    // const [queryTable, setQueryTable] = useState(null)
    const closeTab = (index) => {
        const modifiedTabs = [...tabs]
        modifiedTabs.splice(index, 1)
        setTabs(modifiedTabs)
    }

    const addTab = () => {
        const modifiedTabs = [...tabs, tabs.length]
        setTabs(modifiedTabs)
    }

    // const runQuery = () => {
    //     fetchQueryResults(queryTable)
    // }

    return <Tabs forceRenderTabPanel={true} className="w-full h-full">
        <TabList className="border-b border-slate-200 px-8">
            {tabs.map((item, i) => {
                return <Tab className="inline-block border z-10 outline-none border-slate-200 w-24 border-b-0" key={`${item}_${i}`}>
                    <div className="p-2.5 relative text-xs font-bolder">
                        Query {i + 1}
                        {tabs.length > 1 ? <XMarkIcon onClick={() => closeTab(i)} className="w-4 absolute right-1 top-1 text-black hover:text-blue-500" /> : null}
                    </div>
                </Tab>
            })}
            <div className="inline-block p-1 rounded"><PlusIcon onClick={() => addTab()} className="w-5 inline-block hover:text-blue-500" /></div>
            <div className="absolute right-5 top-0 p-1">
                <div onClick={() => doRefresh(prev => prev + 1)} className="bg-blue-700 text-white cursor-pointer text-center px-5 rounded py-1.5 text-sm font-semibold inline-block">Run SQL</div>
            </div>
        </TabList>
        {tabs.map((item, i) => {
            return <TabPanel className="w-full h-full relative" key={`${item}_${i}`}>
                <QuerySection queryResult={queryResult} fetchingQueryResult={fetchingQueryResult}  fetchQueryResults={fetchQueryResults} />
            </TabPanel>
        })}
    </Tabs>
}

export default QueryTabs
