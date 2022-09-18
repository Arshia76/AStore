import { useEffect } from 'react';
import Auth from '../../components/Page/Auth';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Resource from '../../public/Resource';
import Layout from '../../components/Common/Layout';

const AuthPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(Resource.Routes.HOME);
    }
  }, [status, router]);

  if (status === 'unauthenticated')
    return (
      <Layout>
        <Auth />
      </Layout>
    );
};

export default AuthPage;
