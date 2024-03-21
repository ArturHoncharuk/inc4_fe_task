import { useState } from 'react';

export function useFetchStatus() {
  const [fetching, setFetching] = useState(false);
}
