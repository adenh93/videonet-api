import fetch from "node-fetch";

export const get = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const json = await response.json();
  if (json.status_code) throw Error(json.status_message);
  return json as T;
};
