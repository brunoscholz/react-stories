import React, { useCallback, useEffect, useState } from "react";
import { Wrapper } from "./Toast.styles";
import { useToast } from "./Toast.provider";
import { IToastProps } from "./Toast.utils";
import { timeSince } from "../../utils";

export const Toast = ({ id, content, timer = 3000 }: IToastProps) => {
  const { removeToast } = useToast();
  const [visible, setVisible] = useState(true);
  const [away, setAway] = useState(false);

  const handleClose = useCallback((id: number) => {
    setAway(true)
    setTimeout(() => {
      setVisible(false);
      if (removeToast) {
        removeToast(id);
      }
    }, timer)
  }, [removeToast, timer]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose(id);
    }, 10000); // delay

    return () => {
      clearTimeout(timer);
    };
  }, [id, handleClose]);


  const renderToast = () => {
    var classes = `${away ? 'away' : ''}`
    return (
      <Wrapper status={content.status} timer={timer} className={classes}>
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className="toast"
          data-autohide="false"
        >
          <div className="toast-header">
            {/* <svg width="20" height="20" className="mr-2" viewBox="0 0 24 24">
              <path
                d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"
                fill="#ccc"
              ></path>
            </svg> */}

            <strong className="mr-auto">{content.status}</strong>
            <small>{timeSince(new Date(content.timeAgo))}</small>
            <button
              type="button"
              className="ml-2 mb-1 btn-close"
              data-dismiss="toast"
              aria-label="Close"
              onClick={(e) => timer > 0 && handleClose(id)}
            ></button>
          </div>
          <div className="toast-body">{content.body}</div>
        </div>
      </Wrapper>
    );
  };

  return visible ? renderToast() : null;
};
