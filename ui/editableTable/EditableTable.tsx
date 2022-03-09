import { FC } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { columnType, dataObjectType } from '../../types/table';
import { FormRow } from './FormRow';
import { Pagination } from './Pagination';
import { TableRow } from './TableRow';

export type tableProps = {
  columns: columnType[];
  data: dataObjectType[];
  itemsPerPage?: number;

  sortables: columnType[];
  onSort?: (txt: string) => void;
  tableContainerClassName?: string;
  tableClassName?: string;
  headClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  newData?: dataObjectType[];
  formCells?: columnType[];
  createRowClassName?: string;
  newRowClassName?: string;
  goToNext?: () => void;
  goToPrev?: () => void;
  goTo?: (a: number) => void;
  maxPage?: number;
  currentPage?: number;
};

export const EditableTable: FC<tableProps> = ({
  columns,
  data,
  onSort,
  sortables,
  newData = [],
  formCells = [],
  tableContainerClassName,
  tableClassName,
  headClassName,
  bodyClassName,
  rowClassName,
  newRowClassName,
  createRowClassName,
  goToNext,
  goToPrev,
  currentPage,
  maxPage,
}) => {
  //const { data: currentPageData, next, prev, currentPage, jump, maxPage } = usePaginate(data, itemsPerPage);
  // const { data: currentPageData, goToNext, goToPrev, currentPage, goTo, maxPage } = usePaginate(data, 5);
  return (
    <>
      <div className={` ${tableContainerClassName}`}>
        <table className={`w-full ${tableClassName}`}>
          <thead>
            {/** column row */}
            <tr
              className={`
             text-button text-sm leading-normal border-b-2
            ${headClassName} `}
            >
              {columns.map((col) => (
                <th className="p-1 text-center" key={col.name}>
                  {col.sortable ? (
                    <button
                      className={`flex content-between items-center min-w-10`}
                      onClick={() => onSort && onSort(col.name)}
                    >
                      <span className="mr-1 select-none font-bold ">{col.label}</span>
                      {sortables.find((c) => c.name === col.name)?.isDesc === true ? (
                        <ChevronUp size={12} />
                      ) : (
                        <ChevronDown size={12} />
                      )}
                    </button>
                  ) : (
                    <button className={`flex content-between items-center select-none font-bold`}>{col.label}</button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            className={`
        text-gray-600 text-sm font-ligh 
        ${bodyClassName}`}
          >
            {/** form */}
            <FormRow formCells={formCells} createRowClassName={createRowClassName} />

            {/** new items */}
            {newData?.map((row, rowIndex) => (
              <TableRow key={rowIndex} row={row} columns={columns} rowClassName={newRowClassName} />
            ))}
            {/** saved items */}
            {data?.map((row, rowIndex) => (
              <TableRow key={rowIndex} row={row} columns={columns} rowClassName={rowClassName} />
            ))}
          </tbody>
        </table>
      </div>
      {/** pagination */}
      <Pagination goToNext={goToNext} goToPrev={goToPrev} currentPage={currentPage} maxPage={maxPage} />
    </>
  );
};
