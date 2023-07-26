import { BASE_URL } from "../contants";

export async function get<T>(URL: string) {
  const res = await fetch(`${BASE_URL}${URL}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json() as unknown as T;
}
