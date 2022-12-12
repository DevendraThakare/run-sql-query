import React from 'react';
import { useTable } from 'react-table'
import { useVirtual } from 'react-virtual'


function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows: baseRows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    const parentRef = React.useRef(null);
    const rowVirtualizer = useVirtual({
        size: baseRows.length,
        parentRef,
        // estimateSize: React.useCallback(i => baseRows[i], []),
        // estimateSize: useCallback(() => 35, []),
        overscan: 10
    });

    const tableBodyHeight = rowVirtualizer.totalSize
    const virtualRows = rowVirtualizer.virtualItems
    const paddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0
    const paddingBottom = virtualRows.length > 0 ? tableBodyHeight - virtualRows[virtualRows.length - 1].end : 0
    const containerHeight = '520px'
    // Render the UI for your table
    return (
        <div
            style={{
                height: containerHeight,
                width: '100%',
                overflow: "auto"
            }}
            ref={parentRef}>
            <table className="w-full text-sm border-spacing-0 border select-none" {...getTableProps()}>
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
                    {paddingTop > 0 && (
                        <tr>
                            <td style={{ height: `${paddingTop}px` }} />
                        </tr>
                    )}
                    {virtualRows.map((virtualRow) => {
                        const rowIndex = virtualRow.index
                        const row = baseRows[rowIndex]
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td className="margin-0 p-1 border-b border-r" {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    {paddingBottom > 0 && (
                        <tr>
                            <td style={{ height: `${paddingBottom}px` }} />
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}


const QueryResult = (props) => {
    const { queryResult } = props
    const columnsArr = []
    if (queryResult?.length) {
        Object.keys(queryResult[0]).forEach(element => {
            columnsArr.push({
                Header: element,
                accessor: element,
            })
        });
    }
    const columns = React.useMemo(
        () => columnsArr
    )
    // const columns = React.useMemo(
    //     () => [
    //         // {
    //         //     Header: 'Name',
    //         //     columns: [
    //         //         {
    //         //             Header: 'first_name',
    //         //             accessor: 'first_name',
    //         //         },
    //         //         {
    //         //             Header: 'first_name',
    //         //             accessor: 'last_name',
    //         //         },
    //         //     ],
    //         // },
    //         // {
    //         //     Header: 'Info',
    //         //     columns: [
    //         {
    //             Header: 'first_name',
    //             accessor: 'first_name',
    //         },
    //         {
    //             Header: 'first_name',
    //             accessor: 'last_name',
    //         },
    //         {
    //             Header: 'age',
    //             accessor: 'age',
    //         },
    //         {
    //             Header: 'visits',
    //             accessor: 'visits',
    //         },
    //         {
    //             Header: 'status',
    //             accessor: 'status',
    //         },
    //         {
    //             Header: 'progress',
    //             accessor: 'progress',
    //         },
    //         //     ],
    //         // },
    //     ],
    //     []
    // )

    // const data = React.useMemo(() => makeData(20), [])
    return <Table columns={columns} data={queryResult} />

}

export default QueryResult
