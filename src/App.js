import * as React from 'react';
import GlobalStyle from './assets/styles/GlobalStyle.js'; // ! GlobalStyle.js : Reset css
import Header from './component/essentials/header.jsx';
import StackCoverFlow from './component/contents/Banners/StackCoverFlow.jsx';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <StackCoverFlow />
    </React.Fragment>
  );
};

export default App;
