import React, { useEffect, useState } from 'react';
import SplitPane from 'react-split-pane'
import QueryResult from '../QueryResult'
import CodeMirror from '@uiw/react-codemirror';
import { sql } from '@codemirror/lang-sql';
import Spinner from '../../components/Spinner/Spinner'
import { ArrowDownTrayIcon, PlayIcon, ClipboardDocumentIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import apiClient from '../../utils/axios'

const code = `-- Online SQL Editor to Run SQL Online.                            
-- Use the editor to create new tables, insert data and all other SQL operations.                               
    
SELECT * FROM Customers;
`
const QuerySection = (props) => {
    const [queryTable, setQueryTable] = useState(null)
    const [query, setQuery] = useState(code)
    const [queryResult, setQueryResult] = useState(null)
    const [fetchingQueryResult, setFetchingQueryResult] = useState(false)
    const onChange = React.useCallback((value, viewUpdate) => {
        setQuery(value)
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

    const fetchQueryResults = async (table) => {
        setFetchingQueryResult(true)
        const result = await apiClient.get(`/${table}.json`)
        setFetchingQueryResult(false)
        setQueryResult(result.data.items)
    }

    const runQuery = () => {
        fetchQueryResults(queryTable)
    }

    const downloadCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8," + Object.keys(queryResult[0]).join(",") + "\n"
            + queryResult.map(e => Object.values(e).join(",")).join("\n");

        window.open(encodeURI(csvContent));
    }

    return <div className="relative h-full w-full"><SplitPane
        split="horizontal"
        className="oveflow-auto"
        minSize={240}
        maxSize={680}
        paneStyle={{ overflow: 'auto' }}
        defaultSize={360}
    >
        <div className="h-full w-full relative">
            <div className="sticky top-0 z-10 p-1 bg-slate-50 shadow">
                <div className="flex flex-row">
                    <button title="Run Query" onClick={runQuery} className="flex flex-row bg-slate-50 text-blue-700 cursor-pointer text-center px-4 rounded py-1.5 text-xs font-semibold">
                        <PlayIcon className="w-4 mr-1" />Run SQL
                    </button>
                    <button title="Copy Query" onClick={() => { navigator.clipboard.writeText(query) }} className="flex flex-row bg-slate-50 text-blue-700 cursor-pointer text-center px-4 rounded py-1.5 text-xs font-semibold">
                        <ClipboardDocumentIcon className="w-4 mr-1" />Copy
                    </button>
                </div>
            </div>
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
            <div className="flex flex-row justify-between p-1 px-4 font-bolder sticky bg-white border-y border-slate-200 top-0 w-full">
                <div>
                    <span className="text-gray-500 mr-5 text-xs font-semibold">Output - </span>
                    {queryResult ? <span className="text-sm font-semibold">Total rows: {queryResult.length} of {queryResult.length}</span> : null}

                </div>
                {queryResult ? <div className="flex flex-row">
                    <ChartBarIcon title="Generate Graph" className="w-5 cursor-pointer mr-2.5" />
                    <ArrowDownTrayIcon title="Download CSV" onClick={downloadCSV} className="w-5 cursor-pointer" />
                </div> : null}
            </div>
            {queryResult ? <div className="oveflow-auto">
                <QueryResult queryResult={queryResult} />
            </div> : null}
        </div>
    </SplitPane>
    </div>
}

export default QuerySection
