import * as React from 'react';
import GlobalStyle from './assets/styles/GlobalStyle.js'; // ! GlobalStyle.js : Reset css
import Header from './component/essentials/Header.jsx';
import Main from './component/essentials/Main.jsx';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main />
    </React.Fragment>
  );
};

export default App;
