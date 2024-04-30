import React, { createContext, useCallback, useContext, useState } from "react";
import { IToastProps } from "./Toast.utils";
import ToastContainer from "./Toast.container";

export interface IToastHelpers {
  addToast: any;
  removeToast: any;
}

const ToastContext = createContext<IToastHelpers>({
  addToast: null,
  removeToast: null,
});

let id = 0;
const ToastProvider = ({ children }: { children: any }) => {
  const [toasts, setToasts] = useState<IToastProps[]>([]);

  const addToast = useCallback(
    (content: any) => {
      console.log(content)
      setToasts((toasts: IToastProps[]) => [
        ...toasts,
        { id: id++, content } as IToastProps,
      ]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const toastHelpers = useContext(ToastContext);

  return toastHelpers;
};

export { ToastContext, useToast };
export default ToastProvider;
