import { useEffect } from 'react';
import Auth from '../../components/Page/Auth';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Resource from '../../public/Resource';
import Layout from '../../components/Common/Layout';
import Header from '../../components/Common/Header';

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
        <Header
          title='Auth'
          description='Astore an online eccomerce located in iran created with nextjs'
        />
        <Auth />
      </Layout>
    );
};

export default AuthPage;
