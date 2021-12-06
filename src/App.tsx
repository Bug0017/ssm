import React from 'react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import {
  BrowserView,
  MobileView,
} from 'react-device-detect';
import {ThemeProvider} from '@fluentui/react'
import myTheme from './theme'
import { MobileRoot } from './modules/mobile/root';

initializeIcons();
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <BrowserView>
        <h1>This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <ThemeProvider theme={myTheme}>
          <MobileRoot/>
        </ThemeProvider>
      </MobileView>
    </>
  );
};
