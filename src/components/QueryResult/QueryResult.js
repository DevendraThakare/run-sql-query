import React, { useState } from 'react';
import { useTable } from 'react-table'
import makeData from './makeData'
// import './QueryTabs'


function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table className="w-full text-sm border-spacing-0 border" {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className="margin-0 p-1 border-b border-r text-left" {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td className="margin-0 p-1 border-b border-r" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


const QueryResult = () => {
    const columns = React.useMemo(
        () => [
            // {
            //     Header: 'Name',
            //     columns: [
            //         {
            //             Header: 'first_name',
            //             accessor: 'first_name',
            //         },
            //         {
            //             Header: 'first_name',
            //             accessor: 'last_name',
            //         },
            //     ],
            // },
            // {
            //     Header: 'Info',
            //     columns: [
                    {
                        Header: 'first_name',
                        accessor: 'first_name',
                    },
                    {
                        Header: 'first_name',
                        accessor: 'last_name',
                    },
                    {
                        Header: 'age',
                        accessor: 'age',
                    },
                    {
                        Header: 'visits',
                        accessor: 'visits',
                    },
                    {
                        Header: 'status',
                        accessor: 'status',
                    },
                    {
                        Header: 'progress',
                        accessor: 'progress',
                    },
            //     ],
            // },
        ],
        []
    )

    const data = React.useMemo(() => makeData(20), [])
    return <Table columns={columns} data={data} />

}

export default QueryResult
