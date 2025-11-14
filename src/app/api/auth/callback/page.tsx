'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DiscordCallback() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token');

  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token);
      router.push('/');
    } else {
      router.push('/login');
    }
  }, [token, router]);

  return <p>Logging in with Discord...</p>;
}
