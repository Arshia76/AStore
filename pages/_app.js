import '../styles/globals.css';
import '../public/Resource/Stylesheets/reset.css';
import '../public/Resource/Stylesheets/config.css';
import '../public/Resource/Stylesheets/responsive.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { useState } from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ fontSize: '14px' }}
          />
        </QueryClientProvider>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
