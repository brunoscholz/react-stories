import React, { useEffect, useRef, useState } from "react";
// import { Wrapper } from "./Toast.styles";
import { ITestProps } from "./Toast/Toast.utils";
import { Wrapper } from "./Toast/Toast.styles";

export const ToastTest = ({
  description,
  icon,
  id,
  timer,
  onClose,
  signal,
}: ITestProps) => {
  const [progressBar, setProgressBar] = useState("0");
  const [visible, setVisible] = useState(false);
  const timerProgress = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [styles, setStyles] = useState({
    transition: 'none',
    width: '0',
  })

  useEffect(() => {
    console.log('signal: ', signal)
    if (signal === 0) {
      setProgressBar("0");
      setStyles({
        transition: 'none',
        width: '0',
      })
      setVisible(false);
      return undefined;
    }

    setVisible(true);
    setTimeout(() => {
      setProgressBar("100%");
      setStyles({
        transition: 'width 3s linear',
        width: '100%',
      })
    }, 100)

    timerProgress.current = setTimeout(() => {
      setProgressBar("0");
      setStyles({
        transition: 'none',
        width: '0',
      })
      setVisible(false);
      onClose();
    }, timer);

    return () => {
      if (!timerProgress.current) {
        return;
      }

      clearTimeout(timerProgress.current);
    };
  }, [onClose, timer, signal]);

  if (!visible) {
    return null;
  }

  const renderBar = (size: string) => {
    return (
      <div className="time-bar">
        <div className="progress" style={styles}></div>
      </div>
    );
  };

  const renderToast = () => {
    return (
      <Wrapper status="success" timer={timer}>
        <div role="alert" className="toast">
          <div className="toast-header">
            <button
              type="button"
              className="ml-2 mb-1 btn-close"
              data-dismiss="toast"
              aria-label="Close"
              onClick={(e) => timer > 0 && onClose()}
            ></button>
          </div>
          <div className="toast-body">{description}</div>
          {renderBar(progressBar)}
        </div>
      </Wrapper>
    );
  };

  return renderToast();
};
