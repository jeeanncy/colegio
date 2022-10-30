/* eslint-disable react/jsx-props-no-spreading */
import { useTable } from 'react-table';

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                key={column.id}
                {...column.getHeaderProps()}
                className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    key={cell.id}
                    {...cell.getCellProps()}
                    className="border-b border-gray-200 bg-white px-5 py-5 text-sm"
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
