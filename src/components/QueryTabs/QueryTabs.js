import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { XMarkIcon, PlusIcon } from '@heroicons/react/24/solid'

import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import './QueryTabs.css'

const code = `-- Online SQL Editor to Run SQL Online.                            
-- Use the editor to create new tables, insert data and all other SQL operations.                               
  
SELECT * FROM Customers;
`


const QueryTabs = () => {
    const [tabs, setTabs] = useState([0])
    const closeTab = (index) => {
        const modifiedTabs = [...tabs]
        modifiedTabs.splice(index, 1)
        setTabs(modifiedTabs)
    }
    const addTab = () => {
        const modifiedTabs = [...tabs, tabs.length]
        setTabs(modifiedTabs)
    }
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
    }, []);
    return <Tabs className="w-full">
        <TabList className="border-b border-slate-200 px-8">
            {tabs.map((item, i) => {
                return <Tab className="inline-block border z-10 outline-none border-slate-200 w-24 border-b-0" key={`${item}_${i}`}>
                    <div className="p-2.5 relative text-xs font-bolder">
                        Query {i+1}
                        {tabs.length > 1 ? <XMarkIcon onClick={() => closeTab(i)} className="w-4 absolute right-1 top-1 text-black hover:text-blue-500" /> : null}
                    </div>
                </Tab>
            })}
            <div className="inline-block p-1 rounded"><PlusIcon onClick={() => addTab()} className="w-5 inline-block hover:text-blue-500" /></div>
            <div className="absolute right-5 top-0 p-1">
                <div className="bg-blue-700 text-white cursor-pointer text-center px-5 rounded py-1.5 text-sm font-semibold inline-block">Run SQL</div>
            </div>
        </TabList>
        {tabs.map((item, i) => {
            return <TabPanel className="w-full" key={`${item}_${i}`}>
                <CodeMirror
                    value={code}
                    height="640px"
                    width="100%"
                    extensions={[sql()]}
                    onChange={onChange}
                />
            </TabPanel>
        })}
    </Tabs>

}

export default QueryTabs
