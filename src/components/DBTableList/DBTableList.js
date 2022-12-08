import DBTableListItem from "../DBTableListItem"

const DBTableList = (props) => {
    const { connections=[{
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
    },
    {
        db: 'Postgres',
        host: 'localhost',
        port: '5432',
        database: 'mydb',
        user: 'user',
        status: 'disconnected'
    },
    {
        db: 'Postgres',
        host: 'localhost',
        port: '5432',
        database: 'mydb',
        user: 'user',
        status: 'disconnected'
    },
    {
        db: 'Postgres',
        host: 'localhost',
        port: '5432',
        database: 'mydb',
        user: 'user',
        status: 'disconnected'
    },
    {
        db: 'Postgres',
        host: 'localhost',
        port: '5432',
        database: 'mydb',
        user: 'user',
        status: 'disconnected'
    },
    {
        db: 'Postgres',
        host: 'localhost',
        port: '5432',
        database: 'mydb',
        user: 'user',
        status: 'disconnected'
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
    return <div className="h-full border-b border-slate-200 overflow-auto pb-8">
        {connections.map((connection, index)=>{
            return <DBTableListItem key={`${connection.id}_${index}`} connection={connection} />
        })}
    </div>
}

export default DBTableList
