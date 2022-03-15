import React from 'react';

import { useQuery } from 'react-query';
import Brand from '../api/Brand';

export const useBrands = () => {
    const { data, isLoading, isError } = useQuery('brands', Brand.getAll);

    return {
        data,
        isLoading,
        isError,
    };
};
