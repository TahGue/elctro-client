import { FC } from 'react';
import { columnType } from '../../types/table';

type formRowProps = {
  createRowClassName?: string;
  formCells: columnType[];
};
export const FormRow: FC<formRowProps> = ({ createRowClassName, formCells }) => {
  return (
    <tr
      className={`
            border-b border-gray-200
            hover:bg-gray-800 hover:bg-secondary-washed-out
            ${createRowClassName}`}
    >
      {formCells.map((cell, cellIndex) => (
        <td className="py-3 px-6 text-left whitespace-nowrap" key={`formCell${cellIndex}`}>
          {cell.renderItem ? cell.renderItem(cell, cell.name) : null}
        </td>
      ))}
    </tr>
  );
};
