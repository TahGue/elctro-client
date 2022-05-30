import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '../../modules/auth/authHooks/Auth';
import ResetPassword from '../../modules/auth/ResetPassword';
import Empty from '../../components/empty/Empty';

function ResetPasswordPage() {
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

export default ResetPasswordPage;
