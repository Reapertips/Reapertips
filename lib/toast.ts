import { toast, ToastOptions } from 'react-toastify';

export const toastConfig: ToastOptions = {
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: false,
	pauseOnHover: false,
	draggable: true,
	progress: undefined
};

export const SuccessToast = (text: string, autoClose = 3000) => {
	toastConfig.autoClose = autoClose;
	toast.success(text, toastConfig);
};

export const ErrorToast = (text: string, autoClose = 3000) => {
	toastConfig.autoClose = autoClose;
	toast.error(text, toastConfig);
};

export const InfoToast = (text: string, autoClose = 3000) => {
	toastConfig.autoClose = autoClose;
	toast.info(text, toastConfig);
};
