import React from 'react';
import { Provider } from 'react-redux';

import {
  SafeAreaView,
  Dimensions,
} from 'react-native';

import store from './stores';

import { PublicScreen } from './screens';

const App = () => {
  const fullWidth = Dimensions.get('window').width;
  const fullHeight = Dimensions.get('window').height;

  return (
    <Provider store={store}>
      <SafeAreaView style={{ 
        width: fullWidth,
        height: fullHeight, 
        backgroundColor: '#f0f0f0',
      }}>
        <PublicScreen/>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
