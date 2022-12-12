import { useEffect, useState } from "react"
import DBTableListItem from "../DBTableListItem"
import SearchBox from "../SearchBox/SearchBox"
import debounce from 'lodash/debounce'

const DBTableList = (props) => {
    const { tableData = [] } = props
    const [filteredTableData, setFilteredTableData] = useState(tableData)

    const searchAction = (q) => {
        const res = tableData.filter(obj => {
            if (obj.name.toLowerCase().includes(q.toLowerCase())) {
                return true
            }
        })
        setFilteredTableData(res)
    }
    const debouncedSearchAction = debounce(searchAction, 250);
    useEffect(() => {
        setFilteredTableData(tableData)
    }, [tableData])

    return <div className="h-full border-b border-slate-200 overflow-auto pb-8 relative">
        <div className="border-b">
            <SearchBox onChange={debouncedSearchAction} />
        </div>
        {filteredTableData ? filteredTableData.map((table, index) => {
            return <DBTableListItem key={`${table.name}_${index}`} table={table} />
        }) : null}
    </div>
}

export default DBTableList
