import React from 'react';
import { Header } from '../Header/Header';
import { Canvas } from '../Canvas/Canvas';

import './App.scss';
import { Toolbar } from '../Toolbar/Toolbar';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { KeyboardShortcuts } from '../KeyboardShortcuts';
import * as actions from '~actions';

export const App = () => {
  store.dispatch(actions.loadAllAssets());

  return (
    <Provider store={store}>
      <KeyboardShortcuts />
      <div className="app">
        <Header />

        <div className="toolbarAndCanvas">
          <Toolbar />
          <div className="canvasContainer">
            <Canvas />
          </div>
        </div>
      </div>
    </Provider>
  );
};
