import { useState } from "react"
import DBConnectionListItem from "../DBConnectionListItem"

const DBConnectionList = (props) => {
    const { dbConnectionList, setShowConnectionModal, setSelectedConnection, changeConnectionStatus, deleteConnection } = props

    return <div className="h-full border-b border-slate-200 select-none">
        {dbConnectionList.map((connection, index) => {
            return <DBConnectionListItem setSelectedConnection={setSelectedConnection} deleteConnection={deleteConnection} changeConnectionStatus={changeConnectionStatus} key={`${connection.id}_${index}`} connection={connection} />
        })}
        <div className="text-center mt-4">
            <div onClick={() => setShowConnectionModal(true)} className="text-blue-700 font-semibold text-sm cursor-pointer">Add Connection</div>
        </div>
    </div>
}

export default DBConnectionList
