import { useEffect, useState } from 'react';

export function useClientOnlyValue<T>(server: T, client: T): T {
  const [value, setValue] = useState<T>(server);

  useEffect(() => {
    setValue(client);
  }, [client]);

  return value;
}
