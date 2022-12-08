import DBConnectionListItem from "../DBConnectionListItem"

const DBConnectionList = (props) => {
    const { connections = [{
        db: 'MySQL',
        host: 'localhost',
        port: '3306',
        database: 'mydb',
        user: 'user',
        status: 'connected'
    },
    {
        db: 'Postgres',
        host: 'localhost',
        port: '5432',
        database: 'mydb',
        user: 'user',
        status: 'disconnected'
    }

    ] } = props
    return <div className="h-full border-b border-slate-200">
        {connections.map((connection, index) => {
            return <DBConnectionListItem key={`${connection.id}_${index}`} connection={connection} />
        })}
        <div className="text-center mt-4">
            <div className="text-blue-700 font-semibold text-sm cursor-pointer">Add Connection</div>
        </div>
    </div>
}

export default DBConnectionList
