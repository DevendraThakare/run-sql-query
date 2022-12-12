import { TrashIcon } from '@heroicons/react/24/outline'

const DBConnectionListItem = (props) => {
    const { connection } = props
    return <div className={`px-4 py-4 border-b border-slate-200 ${connection.selected ? 'bg-slate-100': ''}`}>
        <div className="flex flex-row justify-between mb-2">
            <div className="flex flex-row">
                <div className="text-gray-500 font-semibold text-xs mr-2">{connection.db}</div>
                <div className="text-blue-700 font-semibold text-xs">
                    {`${connection.user}@${connection.host}`}
                </div>
            </div>
            <TrashIcon className="w-4 cursor-pointer text-gray-500"/>
        </div>
        <div className="flex flex-row justify-between">
            <div className="text-gray-500 font-semibold text-xs">Database: {connection.database}</div>
            {!connection.connected ? <div className="text-green-700 font-semibold text-xs cursor-pointer">Connect</div>
                : <div className="text-red-700 font-semibold text-xs cursor-pointer">Disconnect</div>}
        </div>
    </div>
}

export default DBConnectionListItem
