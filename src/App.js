import React from 'react';

import './App.css';
import ThemedButton from './Components/ThemedButton'
import themeReducer from './reducers/theme.js'
import { StateProvider } from './State';

const App = () => {
  const initialState = {
    theme: { primary: 'green' }
  };

  return (
    <StateProvider initialState={initialState} reducer={themeReducer}>
        <ThemedButton />
    </StateProvider>
  );

}

export default App;
