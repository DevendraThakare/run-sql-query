import { TrashIcon, NoSymbolIcon, CircleStackIcon } from '@heroicons/react/24/outline'

const DBConnectionListItem = (props) => {
    const { connection, setSelectedConnection, changeConnectionStatus, deleteConnection } = props
    return <div onClick={() => setSelectedConnection(connection)} className={`px-4 py-4 border-b border-slate-200 cursor-pointer ${connection.selected ? 'bg-slate-100' : ''}`}>
        <div className="flex flex-row justify-between mb-2">
            <div className="flex flex-row">
                <div className="text-gray-500 font-semibold text-xs mr-2">{connection.db}</div>
                <div className="text-blue-700 font-semibold text-xs">
                    {`${connection.user}@${connection.host}`}
                </div>
            </div>
            <TrashIcon onClick={(e) => { e.stopPropagation(); deleteConnection(connection) }} className="w-4 cursor-pointer text-gray-500" />
        </div>
        <div className="flex flex-row justify-between">
            <div className="text-gray-500 font-semibold text-xs">Database: {connection.database}</div>
            {!connection.connected ? <div onClick={(e) => { e.stopPropagation(); changeConnectionStatus(connection, true) }} className="flex flex-row text-blue-700 font-semibold text-xs cursor-pointer">
                <CircleStackIcon className="w-3.5 mr-1" /> Connect
            </div>
                : <div onClick={(e) => { e.stopPropagation(); changeConnectionStatus(connection, false) }} className="flex flex-row text-red-700 font-semibold text-xs cursor-pointer">
                    <NoSymbolIcon className="w-3.5 mr-1"  />Disconnect
                </div>}
        </div>
    </div>
}

export default DBConnectionListItem
