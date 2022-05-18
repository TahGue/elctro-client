import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '../../api/Auth';
import ResetPassword from '../../components/auth/ResetPassword';
import Empty from '../../components/empty/Empty';

function RestPassword() {
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    const validateToken = async () => {
      const response = await Auth.validateRestToken({ token } as {
        token: string;
      });

      setIsValid(response?.isValid);
    };

    validateToken();
  }, [token]);

  return isValid === true ? (
    <ResetPassword onSuccess={() => router.push('/')} />
  ) : (
    <Empty />
  );
}

export default RestPassword;
