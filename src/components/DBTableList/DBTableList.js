import DBTableListItem from "../DBTableListItem"
import SearchBox from "../SearchBox/SearchBox"

const DBTableList = (props) => {
    const { tableData = [] } = props
    return <div className="h-full border-b border-slate-200 overflow-auto pb-8 relative">
        <div className="border-b">
            <SearchBox />
        </div>
        {tableData ? tableData.map((table, index) => {
            return <DBTableListItem key={`${table.name}_${index}`} table={table} />
        }) : null}
    </div>
}

export default DBTableList
