import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .mr-1 {
    margin-right: .1rem!important;
  }

  .mr-2 {
    margin-right: .5rem!important;
  }

  .mr-3 {
    margin-right: 1rem!important;
  }

  .mr-auto {
    margin-right: auto!important;
  }

  .ml-1 {
    margin-left: 0.1rem!important;
  }

  .ml-2 {
    margin-left: 0.5rem!important;
  }

  .ml-3 {
    margin-left: 1rem!important;
  }

  .ml-auto {
    margin-left: auto!important;
  }

  .mb-1 {
    margin-bottom: 0.1rem!important;
  }

  .mb-2 {
    margin-bottom: 0.5rem!important;
  }

  .mb-3 {
    margin-bottom: 1rem!important;
  }

  .mb-auto {
    margin-bottom: auto!important;
  }

  .mt-1 {
    margin-top: 0.1rem!important;
  }

  .mt-2 {
    margin-top: 0.5rem!important;
  }

  .mt-3 {
    margin-top: 1rem!important;
  }

  .mt-auto {
    margin-top: auto!important;
  }
`;

interface IColors {
  success: string;
  warning: string;
  error: string;
  info: string;
  "text-white": string;
  "text-dark": string;
}

const colors: IColors = {
  success: "#28a745",
  warning: "#ffc107",
  error: "#dc3545",
  info: "#17a2b8",
  "text-dark": "#000000",
  "text-white": "#f7f7f7",
};

const getColor = (status: string): string => {
  return (colors as any)[status];
};

export const Wrapper = styled("div")<{
  status: string;
  timer: number;
}>`
  width: 350px;
  max-width: 100%;
  font-size: 0.875rem;
  pointer-events: auto;
  // background-color: rgba(255,255,255,.85);
  background-color: ${(props) => getColor(props.status)};
  background-clip: padding-box;
  border: 1px solid ${(props) => getColor(props.status)};
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: ${(props) =>
    props.status === "warning"
      ? getColor("text-dark")
      : getColor("text-white")};

  margin-right: 1rem;
  margin-top: 1rem;
  position: relative;
  padding: 1rem;

  transition: all 0.3s ease-out;

  // background: ${(props) => getColor(props.status)};
  // box-shadow: 0px 4px 10px 0px ${(props) => getColor(props.status)};

  &.away {
    transform: translateY(-200px);
  }

  .toast-header {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    background-clip: padding-box;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);

    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    strong {
      margin-right: auto !important;
    }

    .btn-close {
      position: absolute;
      top: 4px;
      right: 8px;
      box-sizing: content-box;
      width: 1em;
      height: 1em;
      padding: 0.25em 0.25em;
      color: #000;
      background: transparent
        url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e")
        center/1em auto no-repeat;
      border: 0;
      border-radius: 0.25rem;
      opacity: 0.5;
      cursor: pointer;
    }
  }
  .toast-body {
    padding: 0.75rem;
    word-wrap: break-word;
  }

  .time-bar {
    height: 3px;
    background: #71d3ab;
    width: 110%;
    margin-left: -16px;
    margin-bottom: -16px;

    .progress {
      height: 100%;
      background-color: #447733;
      width: 0;
      transition: width ${(props) => props.timer}ms linear;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  /* Top right corner */
  right: 0;
  top: 0;
`;
