import React from 'react';
import './App.css';
import ToastProvider from './Components/Toast/Toast.provider';
import { Dashboard } from './Components/Dashboard';
import { GlobalStyles } from './Components/Toast/Toast.styles';

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <GlobalStyles />
        <Dashboard />
      </ToastProvider>
    </div>
  );
}

export default App;
