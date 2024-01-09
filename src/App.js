import * as React from 'react';
import GlobalStyle from './assets/styles/GlobalStyle.js'; // ! GlobalStyle.js : Reset css
import Header from './component/essentials/Header.jsx';
import Main from './component/essentials/Main.jsx';
import { useEffect } from 'react';

const App = () => {
  // function setScreenSize() {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // }

  // useEffect(() => {
  //   setScreenSize();
  //   window.addEventListener('resize', setScreenSize);
  //   return () => window.removeEventListener('resize', setScreenSize);
  // }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
