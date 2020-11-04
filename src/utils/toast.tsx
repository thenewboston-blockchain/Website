import React, {ReactNode} from 'react';
import {toast} from 'react-toastify';

import Toast, {ToastType} from 'components/Toast';

export const displayErrorToast = (error: any): void => {
  let errorStr: string;

  if (typeof error === 'string') {
    errorStr = error;
  } else if (error?.response?.data) {
    errorStr = JSON.stringify(error.response.data);
  } else if (error?.message) {
    errorStr = error.message;
  } else {
    errorStr = JSON.stringify(error);
  }

  displayToast(errorStr);
};

export const displayToast = (message: ReactNode, type: ToastType = 'warning', className?: string): void => {
  toast(
    <Toast className={className} type={type}>
      {message}
    </Toast>,
  );
};
