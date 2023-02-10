/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {ReactNode, Suspense} from 'react';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter as Router} from 'react-router-dom';
import QueryProvider from './ReactQueryProvider';

interface AppProps {
  children: ReactNode;
}

const ErrorFallback = (error: any) => {
  console.log('ERROR:', error);
  return (
    <div className="text-red-500 w-screen h-screen flex flex-col justify-center items-center" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
    </div>
  );
};

export const AppProvider = (props: AppProps) => {
  return (
    <Suspense fallback={<div>Spinner</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryProvider>
          <Router>{props.children}</Router>
        </QueryProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
