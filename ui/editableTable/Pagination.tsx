import { FC } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

type paginationProps = {
  goToNext?: () => void;
  goToPrev?: () => void;
  goTo?: (a: number) => void;
  maxPage?: number;
  currentPage?: number;
};
export const Pagination: FC<paginationProps> = ({ goToNext, goToPrev, currentPage, maxPage }) => {
  return (
    <div className={` flex items-center m-4  float-right`}>
      <button onClick={goToPrev}>
        <ChevronLeft
          className={` transition
            text-secondary-washed-out 
            hover:text-secondary`}
        />
      </button>
      <span className={`text-secondary-washed-out`}>{`${currentPage} / ${maxPage}`}</span>
      <button onClick={goToNext}>
        <ChevronRight
          className={`transition
            text-secondary-washed-out 
            hover:text-secondary`}
        />
      </button>
    </div>
  );
};
