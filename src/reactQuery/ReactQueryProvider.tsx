import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface IPropsReactQueryProvider {
  children: React.ReactNode;
}

export const ReactQueryProvider: React.FC<IPropsReactQueryProvider> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
