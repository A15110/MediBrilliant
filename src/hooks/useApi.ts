import { useState, useCallback } from 'react';
import { api, APIError } from '../lib/api';
import { toast } from 'react-hot-toast';

interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface UseApiResponse<T> extends ApiState<T> {
  execute: (...args: any[]) => Promise<T | null>;
  reset: () => void;
}

export function useApi<T>(
  apiFunction: (...args: any[]) => Promise<T>,
  options: {
    onSuccess?: (data: T) => void;
    onError?: (error: Error) => void;
    successMessage?: string;
    errorMessage?: string;
  } = {}
): UseApiResponse<T> {
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(
    async (...args: any[]) => {
      setState(prev => ({ ...prev, loading: true, error: null }));
      try {
        const data = await apiFunction(...args);
        setState({ data, loading: false, error: null });
        
        if (options.successMessage) {
          toast.success(options.successMessage);
        }
        
        options.onSuccess?.(data);
        return data;
      } catch (error) {
        const apiError = error instanceof APIError ? error : new APIError(
          options.errorMessage || 'An unexpected error occurred'
        );
        
        setState(prev => ({ ...prev, loading: false, error: apiError }));
        
        toast.error(apiError.message);
        options.onError?.(apiError);
        return null;
      }
    },
    [apiFunction, options]
  );

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}