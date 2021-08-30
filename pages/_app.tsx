import type { AppProps } from 'next/app';

import '@fontsource/ubuntu';

import { ToastContainer } from 'react-toastify';
import { toastConfig } from '@lib/toast';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/globals.scss';

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
