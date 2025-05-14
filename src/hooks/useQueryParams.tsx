"use client";

import { useCallback, useEffect, useState } from "react";

export function useQueryParams() {
	 const getParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: Record<string, any> = {};
    searchParams.forEach((value, key) => {
      if (value.includes(',')) {
        params[key] = value.split(',');
      } else {
        params[key] = value;
      }
    });
    return params;
  };

  const [queryParams, setQueryParamsState] = useState(getParams());
  
  useEffect(() => {
    const handlePopState = () => {
      setQueryParamsState(getParams());
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const setQueryParams = useCallback(
    (newParams) => {
      const currentParams = new URLSearchParams(window.location.search);
      const updatedParams = new URLSearchParams(currentParams.toString());

      Object.entries(newParams).forEach(([key, value]) => {
        if (
          value === null ||
          value === undefined ||
          (Array.isArray(value) && value.length === 0) ||
          value === ''
        ) {
          updatedParams.delete(key);
        } else if (Array.isArray(value)) {
          updatedParams.set(key, value.join(','));
        } else {
          updatedParams.set(key, String(value));
        }
      });

      const queryString = updatedParams.toString();
      const newUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ''}`;
      
      window.history.pushState({}, '', newUrl);
      setQueryParamsState(getParams());
    },
    []
  );

  const clearAllQueryParams = () => {
    window.history.pushState({}, '', window.location.pathname);
    setQueryParamsState({});
  };

	return { queryParams, setQueryParams, clearAllQueryParams };
}
