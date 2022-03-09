import React from 'react';
import { getFullName } from '../lib/getFullName';
import { User } from '../types/generated';
import { Persona, PersonaProps } from './Persona';
import { Tooltip } from './Tooltip';

export interface PersonaGroupProps extends React.ComponentPropsWithoutRef<'div'> {
  users: User[];
}

export const PersonaGroup: React.FC<PersonaGroupProps & Omit<PersonaProps, 'user'>> = ({ users = [], ...props }) => {
  const fullnames = getFullName(users);
  const [first] = users;
  const additionalUsers = Math.max(users.length - 1, 0);
  return (
    <Tooltip content={fullnames}>
      <div className="flex">
        <Persona className="shadow-xl" user={first} {...props} showTooltip={false} />

        {additionalUsers ? (
          <Persona className="bg-gray-700 z-10" {...props} showTooltip={false} title={`+${additionalUsers}`} />
        ) : null}
      </div>
    </Tooltip>
  );
};
