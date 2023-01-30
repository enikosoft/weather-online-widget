/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from 'react';
import {QueryClient, UseQueryOptions, DefaultOptions, QueryClientProvider} from 'react-query';
import {PromiseValue} from 'type-fest';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
  },
};

export const queryClient = new QueryClient({defaultOptions: queryConfig});

export type ExtractFnReturnType<FnType extends (...args: any) => any> = PromiseValue<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export const QueryProvider = ({children}: {children: ReactNode}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;
