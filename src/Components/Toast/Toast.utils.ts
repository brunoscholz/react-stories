
export interface IToastStates {
  toastProps: any;
  isAuthoring: any;
  showToast: any;
}

export interface IToastContent {
  status: string;
  timeAgo: number;
  body: string;
}

export interface IToastProps {
  id: number;
  content: IToastContent;
  timer: number;
}

export interface ITestProps {
  description: string;
  icon: string;
  id: string;
  timer: number;
  onClose: any;
  signal: number;
}
