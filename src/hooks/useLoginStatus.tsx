import { useState, useEffect } from 'react';
import { useAuth } from '../features/Login/context/AuthProvider';

export function useLoginStatus() {
  const {
    state: { isLogged },
  } = useAuth();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('user-token');
    if (token || isLogged) {
      setLogged(true);
    }
    setLoading(false);
  }, [logged, isLogged]);

  return [logged, loading];
}
