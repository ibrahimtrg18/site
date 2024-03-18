import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
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

      router.push(pathname + "?" + params.toString());
      return;
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

      router.push(pathname + "?" + params.toString());
      return;
    },
    [searchParams]
  );

  return {
    router,
    updateQuery,
    removeQuery,
  };
};
