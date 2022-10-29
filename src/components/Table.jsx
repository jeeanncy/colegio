/* eslint-disable react/jsx-props-no-spreading */
import {
  faGraduationCap,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                key={column.id}
                {...column.getHeaderProps()}
                className="border border-gray-400 px-2"
              >
                {column.render('Header')}
              </th>
            ))}
            <th className="border border-gray-400 p-2 text-gray-400">
              Opciones
            </th>
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
                    className="border border-gray-400 p-2"
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
              <td className="border border-gray-400 p-2">
                <div className="flex justify-between ">
                  <Link to="/">
                    <FontAwesomeIcon
                      className="text-lg"
                      icon={faGraduationCap}
                    />
                  </Link>
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
