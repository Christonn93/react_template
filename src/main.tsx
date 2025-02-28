import { ErrorBoundary } from './utils/logger/ErrorBoundary.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './hooks/query/queryClient.ts';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { ThemeProvider } from './providers/ThemeProvider.tsx';
import { AuthProvider } from './providers/AuthProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
createRoot(rootElement).render(
  <ErrorBoundary>
    <AuthProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </AuthProvider>
  </ErrorBoundary>,
);
