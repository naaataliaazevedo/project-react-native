import React, {Fragment} from 'react';
import './config/ReactotronConfig';
import Routes from './routes';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </Fragment>
  );
};

export default App;
