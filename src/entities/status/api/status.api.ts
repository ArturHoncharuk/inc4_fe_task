import { FetchStatusResponse } from './types';

import { fetcher } from '@/shared/lib/_fetcher';

class StatusApi {
  constructor() {}

  async info() {
    const raw = await fetcher({
      path: 'info',
    });

    const response: FetchStatusResponse = await raw.json();

    return response;
  }
}

export const statusApi = new StatusApi();
