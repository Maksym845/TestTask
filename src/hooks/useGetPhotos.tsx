import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { REACT_QUERY } from 'types/photos';
import { getPhotos } from 'api/photos';

interface IParams {
  search?: string,
}

export const useGetPhotos = (params?: IParams) => {
  const [filterTitle, setFilterTitle] = useState(params?.search);

  const { data, isError, isLoading } = useQuery({
    queryKey: [REACT_QUERY.PHOTOS],
    queryFn: getPhotos,
    select: response => {
      return filterTitle ?
        response.data.filter(photo => photo.title.toLowerCase().includes(filterTitle?.toLowerCase()))
        : response.data;
    },
  });

  return { data, isError, isLoading, setFilterTitle };
};
