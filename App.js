import React from 'react';
import Providers from './src/navigations';

const App = () => {
  Responsive.setOptions({width: 360, height: 640, enableOnlySmallSize: false});

  return <Providers />;
}

export default App;
