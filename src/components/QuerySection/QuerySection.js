import React, { useEffect, useState } from 'react';
import SplitPane from 'react-split-pane'
import QueryResult from '../QueryResult'
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import Spinner from '../../components/Spinner/Spinner'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

const code = `-- Online SQL Editor to Run SQL Online.                            
-- Use the editor to create new tables, insert data and all other SQL operations.                               
  
SELECT * FROM Customers;
`

const QuerySection = (props) => {
    const { queryResult, fetchQueryResults, fetchingQueryResult } = props
    const [queryTable, setQueryTable] = useState(null)

    const onChange = React.useCallback((value, viewUpdate) => {
        setTable(value)
    }, []);

    const setTable = (value) => {
        const lowecase = value.toLowerCase()
        let table
        if (lowecase.indexOf('from') != -1) {
            table = lowecase.slice(lowecase.indexOf('from') + 'from'.length).replace(';\n', '').trim()
        } else {
            table = 'customers'
        }
        setQueryTable(table)
    }

    useEffect(() => {
        setTable(code)
    }, [])

    return <SplitPane
        split="horizontal"
        className="oveflow-auto"
        minSize={240}
        maxSize={680}
        paneStyle={{ overflow: 'auto' }}
        // primary="second"
        defaultSize={360}
    >
        <div className="h-full w-full">
            <CodeMirror
                value={code}
                height="640px"
                width="100%"
                extensions={[sql()]}
                onChange={onChange}
            />
        </div>
        <div className="bg-slate-100 h-full w-full overflow-auto relative">
            {fetchingQueryResult ? <div className="w-full h-full flex items-center justify-center">
                <Spinner size="small" />
            </div> : null}
            <div className="flex flex-row justify-between p-2 font-bolder sticky bg-white border-y border-slate-200 top-0 w-full">
                <div>
                    <span className="text-gray-500 mr-5">Output - </span>
                    {queryResult ? <span className="text-sm font-semibold">Total rows: {queryResult.length} of {queryResult.length}</span> : null}

                </div>
                {queryResult ? <div>
                    <ArrowDownTrayIcon className="w-5 cursor-pointer" />
                </div> : null}
            </div>
            {queryResult ? <div className="oveflow-auto">
                <QueryResult queryResult={queryResult} />
            </div> : null}
        </div>
    </SplitPane>
}

export default QuerySection
