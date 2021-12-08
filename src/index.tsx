import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mergeStyles } from '@fluentui/react';


import { setup } from "twind";

setup({
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: "0px",
      },
      ringOpacity: {
        DEFAULT: "0",
      },
    },
  },
});

// Inject some global styles
mergeStyles({
  ':global(body,html,#root)': {
    margin: 0,
    padding: 0,
    height: '100vh',
  },
});

ReactDOM.render(<App />, document.getElementById('root'));


