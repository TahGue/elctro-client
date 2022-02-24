import React from 'react';
import { Trash2 } from 'react-feather';
import { useTypeSafeTranslation } from '../shared-hooks/useTypeSafeTranslation';
import { Button } from './Button';
import { Dialog, DialogProps } from './Dialog';

type DeleteDialogProps = {
  referToName?: string | null;
  onDelete: () => void;
  children?: React.ReactNode;
};

export const DeleteDialog: React.FC<DeleteDialogProps & Omit<DialogProps, 'children'>> = ({
  open = true,
  referToName,
  children,
  onDelete,
  onClose,
  ...props
}) => {
  const { t } = useTypeSafeTranslation();

  return (
    <Dialog onClose={onClose} open={open} {...props}>
      <div className="bg-background flex flex-col items-center pt-8 px-2 rounded-xl">
        <Trash2 size="20%" className="text-danger mb-4" />
        <p className="font-black text-2xl">{t('actions.areYouSure')}</p>
        {referToName && (
          <p className="text-sm">
            {t('actions.promptDelete')}
            <span className="font-bold italic"> {referToName}</span>?
          </p>
        )}
        <p className="text-sm"> {t('actions.thisActionCannotBeUndone')}</p>
        <div className="flex flex-row items-end mt-8 mb-6 w-full justify-center gap-2">
          <Button onClick={onClose} color="transparent" className="text-gray-500">
            {t('common.cancel')}
          </Button>
          <Button onClick={onDelete} color="danger">
            {t('common.delete')}
          </Button>
        </div>

        {children}
      </div>
    </Dialog>
  );
};
