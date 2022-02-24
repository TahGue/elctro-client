import { FC } from 'react';
import { columnType, dataObjectType } from '../../types/table';

type tableRowProps = {
  rowClassName?: string;
  rowIndex?: number;
  row: dataObjectType;
  columns: columnType[];
};
export const TableRow: FC<tableRowProps> = ({ rowClassName = '', rowIndex = 0, columns = [], row = {} }) => {
  return (
    <tr
      className={`transition duration-300 ease-in-out hover:bg-gray-100
            ${rowClassName}`}
    >
      {columns.map((col, colIndex) => (
        <td className="p-1 text-left" key={colIndex}>
          {col.renderItem ? col.renderItem(row, col.name, rowIndex) : row[col.name]}
        </td>
      ))}
    </tr>
  );
};
