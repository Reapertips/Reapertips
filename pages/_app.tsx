import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { toastConfig } from '@lib/toast';
import 'react-toastify/dist/ReactToastify.css';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu/700.css';

import '@fontsource/open-sans';
import '@fontsource/open-sans/700.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ToastContainer
				position={toastConfig.position}
				autoClose={toastConfig.autoClose}
				hideProgressBar={toastConfig.hideProgressBar}
				newestOnTop={false}
				closeOnClick={toastConfig.closeOnClick}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover={toastConfig.pauseOnHover}
			/>
			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
