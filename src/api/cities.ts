import {ExtractFnReturnType} from 'providers';
import {geographyServer} from './axios';
import {useQuery} from 'react-query';

export const getCities = (str: string, limit: number, offset: number) => {
  return geographyServer.get(`/cities?str=${str}&limit=${limit}&offset=${offset}`);
};

type QueryFnType = typeof getCities;

export const useCities = (inputStr: string, limit = 15, offset = 0) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['cities', inputStr, limit, offset],
    queryFn: () => getCities(inputStr, limit, offset),

    enabled: !!inputStr.length,
  });
};
