import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/solid'
import QuerySection from '../QuerySection';
// import 'react-tabs/style/react-tabs.css';
import './QueryTabs.css'

const QueryTabs = (props) => {
    const { fetchQueryResults, queryResult, fetchingQueryResult } = props
    const [tabs, setTabs] = useState([0])
    const [tabIndex, setTabIndex] = useState(0);
    const closeTab = (index) => {
        const modifiedTabs = [...tabs]
        modifiedTabs.splice(index, 1)
        setTabs(modifiedTabs)
    }

    const addTab = () => {
        const modifiedTabs = [...tabs, tabs.length]
        setTabIndex(modifiedTabs.length-1)
        setTabs(modifiedTabs)
    }

    return <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} forceRenderTabPanel={true}  className="w-full h-full">
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
        </TabList>
        {tabs.map((item, i) => {
            return <TabPanel className="h-full hidden" key={`${item}_${i}`}>
                <QuerySection index={i} queryResult={queryResult} fetchingQueryResult={fetchingQueryResult}  fetchQueryResults={fetchQueryResults} />
            </TabPanel>
        })}
    </Tabs>
}

export default QueryTabs
