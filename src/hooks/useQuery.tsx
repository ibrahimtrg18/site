import { useCallback } from "react";
import { useSearchParams } from "next/navigation";

export const useQuery = () => {
  const searchParams = useSearchParams();

  /**
   * hooks to help create/update search parameters in url
   * @param {string} name - name search parameter
   * @param {string} value - value for name search parameter
   */
  const updateQuery = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  /**
   * hooks to help remove search parameters in url
   * @param {string} name - name search parameter
   */
  const removeQuery = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);

      return params.toString();
    },
    [searchParams]
  );

  return {
    updateQuery,
    removeQuery,
  };
};
