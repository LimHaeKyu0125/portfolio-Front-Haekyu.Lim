import * as React from 'react';
import GlobalStyle from './assets/styles/GlobalStyle.js'; // ! GlobalStyle.js : Reset css
import Header from './component/essentials/header.jsx';
import FrontStackCoverFlow from './component/contents/Banners/FrontStackCoverFlow.jsx';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <FrontStackCoverFlow />
    </React.Fragment>
  );
};

export default App;
