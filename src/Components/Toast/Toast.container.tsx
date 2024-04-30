import React from "react";
import { createPortal } from "react-dom";
import { Container } from "./Toast.styles";
import { Toast } from "./Toast";
import { IToastProps } from "./Toast.utils";

const ToastContainer = ({ toasts }: { toasts: IToastProps[] }) => {
  return createPortal(
    <Container>
      {toasts.map((item) => {
        return (
          <Toast key={item.id} id={item.id} content={item.content} timer={item.timer} />
        );
      })}
    </Container>,
    document.body
  );
};

export default ToastContainer;
