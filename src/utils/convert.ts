/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Encodes an object into a Base64 string and adds it to a URL as a query parameter.
 * @param baseUrl - The base URL to append the parameter to.
 * @param paramName - The name of the query parameter.
 * @param obj - The object to encode.
 * @returns The URL with the Base64-encoded parameter.
 */
export function encodeObjectToURL(
  baseUrl: string,
  paramName: string,
  obj: Record<string, any>
): string {
  const base64String = btoa(JSON.stringify(obj));
  const url = new URL(baseUrl, window.location.origin);
  url.searchParams.set(paramName, base64String);
  return url.toString();
}

/**
 * Decodes a Base64 string from a URL query parameter back into an object.
 * @param url - The URL containing the query parameter.
 * @param paramName - The name of the query parameter.
 * @returns The decoded object.
 * @throws Error if the parameter is missing or decoding fails.
 */
export function decodeObjectFromURL(
  url: string,
  paramName: string
): Record<string, any> {
  const parsedUrl = new URL(url, window.location.origin);
  const base64String = parsedUrl.searchParams.get(paramName);

  if (!base64String) {
    throw new Error(`Query parameter "${paramName}" is missing.`);
  }

  try {
    return JSON.parse(atob(base64String));
  } catch (error: any) {
    throw new Error(
      `Failed to decode parameter "${paramName}": ${error.message}`
    );
  }
}
