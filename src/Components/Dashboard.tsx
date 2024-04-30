import React, { useContext, useState } from "react";
import { ToastContext } from "./Toast/Toast.provider";
import { ToastTest } from "./ToastTest";

export const Dashboard = () => {
  const { addToast } = useContext(ToastContext);
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("success");

  const [signal, setSignal] = useState<number>(0);

  const handleClose = () => {
    setSignal(0);
  };

  const showToast = () => {
    setSignal(Date.now());
  };

  return (
    <div style={{ width: "100%", padding: "1rem", display: "flex", flexDirection: 'column' }}>
      {/* <label htmlFor="content">Add Toast</label>
      <input
        id="content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="success">Success</option>
        <option value="info">Info</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
      <p>{status}</p>
      <button
        type="button"
        onClick={() => {
          if (content) {
            addToast({
              status: status,
              timeAgo: Date.now() - 1000,
              body: content,
            });
            setContent("");
            setStatus("success");
          }
        }}
      >
        Add
      </button><br/> */}
      <button type="button" onClick={() => showToast()}>
        Show Test Toast
      </button>
      <ToastTest
        description="new test toast"
        id="212989"
        icon=""
        onClose={() => handleClose()}
        signal={signal}
        timer={3000}
      />
    </div>
  );
};
