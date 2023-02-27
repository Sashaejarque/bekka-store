import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../features/Login/context/AuthProvider';
import { CookieHandler } from '../features/Login/utils/CookieHandler';

export function useLoginStatus() {
  const {
    state: { isLogged },
  } = useAuth();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const cookie = useMemo(() => new CookieHandler(), []);

  useEffect(() => {
    const token = cookie.getToken();
    if (token || isLogged) {
      setLogged(true);
    }
    setLoading(false);
  }, [logged, isLogged, cookie]);

  return [logged, loading];
}
