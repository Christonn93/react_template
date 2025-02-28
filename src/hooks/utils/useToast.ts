import { toast, Slide, ToastPosition } from 'react-toastify';

const useToast = () => {
  const baseConfig = {
    position: 'top-right' as ToastPosition,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Slide,
  };

  return {
    default: (message: string) => toast(message, baseConfig),
    success: (message: string) => toast.success(message, baseConfig),
    info: (message: string) => toast.info(message, baseConfig),
    warning: (message: string) => toast.warning(message, baseConfig),
    error: (message: string) => toast.error(message, baseConfig),
    notify: () => toast('🦄 Wow so easy!', baseConfig),
  };
};

export default useToast;
