import { TableCellsIcon } from '@heroicons/react/24/outline'
import './DBTableListItem.css'

const DBTableListItem = (props) => {
    const { table } = props
    return <div className="flex p-4 select-none">
        <div className="table-icon z-10">
            <TableCellsIcon className="w-6 text-slate-400" />
        </div>
        <div className="table-info__content">
            <h3 className="text-sm px-1">{table.name} [-]</h3>
            <ul className="text-xs table-info__content-details">
                {table.collumns.map((collumn, i) => {
                    return <li key={`${collumn.name}_${i}`}>
                        <div className="relative px-1 flex flex-row flex-wrap gap-1">
                            {collumn.name}
                            <span className="text-blue-700">
                                [{collumn.type}]
                            </span>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </div>
}

export default DBTableListItem
