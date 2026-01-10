import { Text } from '@mantine/core';
import type { FallbackProps } from 'react-error-boundary';

export const MainErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-red-500">
      <Text>Something went terribly wrong</Text>
      <Text>{error.message}</Text>
      <button
        className="mt-4 px-4 py-2 bg-white text-red-500 rounded"
        onClick={resetErrorBoundary}
      >
        Try Again
      </button>
    </div>
  );
};