import { FC, ReactNode, useEffect, useRef } from 'react';

export type clickAwayType = {
  children: ReactNode;
  className?: string;
  onClickAway: () => void;
};

export const ClickAway: FC<clickAwayType> = ({
  className,
  children,
  onClickAway,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function onHandleClick(event: MouseEvent): any {
      if (
        ref?.current &&
        !(
          ref.current && ref.current !== null ? ref.current : new Node()
        )?.contains(event?.target as Node)
      ) {
        onClickAway();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', onHandleClick);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', onHandleClick);
    };
  }, [ref]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
