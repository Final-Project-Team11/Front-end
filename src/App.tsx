import React from 'react';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './shared/GlobalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
