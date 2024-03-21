import { constants } from '@/shared/config';

type MethodType = 'GET' | 'POST' | 'PUT' | 'UPDATE' | 'DELETE' | 'PATCH';

interface FetchParams {
  readonly path: string;
  readonly method?: MethodType;
  readonly body?: unknown;
  readonly headers?: HeadersInit;
  readonly signal?: AbortSignal;
}

export async function fetcher({
  path,
  signal,
  method = 'GET',
  body,
  headers,
}: FetchParams) {
  return fetch(`${constants.BASE_API_URL}/${path}`, {
    method,
    signal,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });
}
