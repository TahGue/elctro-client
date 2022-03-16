import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type IProps = {
  children: React.ReactNode;
  title: string;
};
function Collapse({ title, children }: IProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <div
        onClick={() => setExpanded((prev: boolean) => !prev)}
        className=' flex justify-between items-center cursor-pointer p-2 '
      >
        <span>{title}</span>
        {expanded ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      {expanded && <div>{children}</div>}
    </div>
  );
}

export default Collapse;
