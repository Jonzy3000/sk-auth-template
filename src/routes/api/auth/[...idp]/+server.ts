import { appAuth } from "$lib/server/appAuth";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async (e) => {
  const res = await (appAuth.get(e) as Promise<Response>);
  return new Response(res.body ?? null, {
    status: res.status ?? 500,
    headers: res.headers,
  });
};

export const POST: RequestHandler = async (e) => {
  const res = await (appAuth.post(e) as Promise<Response>);
  return new Response(res.body ?? null, {
    status: res.status ?? 500,
    headers: res.headers,
  });
};
