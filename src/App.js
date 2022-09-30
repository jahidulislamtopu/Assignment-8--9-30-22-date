import React from 'react';
import './App.css';
import Club from './components/Club/Club';
import Header from './components/Header/Header';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();
function App() {
  return (
    <div className="Appali">
      {/* all header section is added in header file  */}
      <Header></Header>
      {/* club section are added here  */}
      <Club></Club>
    </div>
  );
}
// 
// hii

export default App;
